import drawWardChart from './charts/wardChart.js';
import map from './charts/tokyoMap.js';
export {flyToPoint, selectWard, getWardFromId, deselectCurrentWard, onWardSelect};

/**
 * Remove placeholder next to map that says "Tap or hover on a ward"
 */
const removePlaceholder = () => {
    var placeholder = document.getElementById('placeholder');
    placeholder.style.display = 'none';

    var chart = document.getElementById('wardHistoryChart');
    chart.style.display = 'block';
}

/**
 * takes a ward's id and returns it GeoJSON object.
 * 
 * @param {GeoJSON} tokyoGeo    GeoJSON of Tokyo's wards
 * @param {int} id              ward's id
 */
const getWardFromId = (tokyoGeo, id) => {
    for (const ward of tokyoGeo['features']) {
        if (ward['id'] == id) {
            return ward
        }
    }
}

/**
 * deselect ward when user hovers on a different ward.
 * 
 * @param {Mapbox map} map      interactive map
 * @param {int} hoveredWardId   id of the ward that the user is hovering on
 */
const deselectCurrentWard = (map, hoveredWardId) => {
    if (hoveredWardId) {
        map.setFeatureState(
            { source: "wards", id: hoveredWardId },
            { hover: false }
        );
    }
}

/**
 * Selects a ward and deselects the previously selected ward.
 * Highlights and centers map around selected ward.
 * 
 * @param {GeoJSON} tokyoGeo    GeoJSON of Tokyo's wards
 * @param {Mapbox map} map      interactive map
 * @param {int} prevWardId		id of previously selected ward
 * @param {int} wardId 			id of newly selected ward
 */
const selectWard = (tokyoGeo, map, prevWardId, wardId) => {
    removePlaceholder();
    deselectCurrentWard(map, prevWardId);

    map.setFeatureState(
        { source: "wards", id: wardId },
        { hover: true }
    );

    var currentWard = getWardFromId(tokyoGeo, wardId);

    fetch('../data/cases.json')
		.then(response => response.json())
		.then(json => {
			// json = cases by ward
			const wardHistory = getHistory(currentWard, json);
            drawWardChart(currentWard, wardHistory);
        });
}

/**
 * Centers map around a point and zooms into it.
 * 
 * @param {float list} point	ward's center's coordinates that the map zooms into 
 */
const flyToPoint = (point) => {
    map.flyTo({
        center: point,
        zoom: 9.5,
        'essential': true, // this animation is considered essential with respect to prefers-reduced-motion
      });
}

/**
 * Returns the history of cases for a ward.
 * 
 * @param {GeoJSON} currentWard 	GeoJSON of selected ward
 * @param {GeoJSON} cases 			History of cases in all wards
 */
const getHistory = (currentWard, cases) => {
    var history = cases["features"].filter(
    (ward) =>
        ward["properties"]["団体名"] === currentWard.properties.ward_ja
    );

    // key: timestamp of date, val: num of cases
    var casesHistory = {};
    history.forEach((ward) => {
    var timestamp = ward["properties"]["公表日"];
    casesHistory[timestamp] = ward["properties"]["件数"] || 0;
    });

    history = {
        name_en: currentWard.properties.ward_en,
        name_ja: currentWard.properties.ward_ja,
        history: casesHistory,
    };

    // see history of that ward in console
    return history;
}

/**
 * Highlight and center map around ward when user selects it through the <select> menu
 * 
 * @param {GeoJSON} tokyoGeo 	GeoJSON of Tokyo's wards
 * @param {Mapbox map} map 		interactive map
 * @param {int} hoveredWardId 	id of currently selected ward
 * @param {int} wardId 			id of newly selected ward
 */
const onWardSelect = (tokyoGeo, map, hoveredWardId, wardId) => {
    for (const ward of tokyoGeo['features']) {
        if (ward.id == wardId) {
            selectWard(tokyoGeo, map, hoveredWardId, wardId);
            var center = eval(ward['properties']['center']);
            //alert(center);
            //alert(typeof center);
            flyToPoint(center);
            break;
        }
    }
}