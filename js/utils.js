import {drawWardChart} from './charts/wardChart.js';
export {flyToPoint, selectWard, getWardFromId, deselectCurrentWard};

function removePlaceholder() {
    var placeholder = document.getElementById('placeholder');
    placeholder.style.display = 'none';

    var chart = document.getElementById('wardHistoryChart');
    chart.style.display = 'block';
}

function getWardFromId(tokyo, id) {
    for (const ward of tokyo['features']) {
        if (ward['id'] == id) {
            return ward
        }
    }
}

function deselectCurrentWard(map, hoveredWardId) {
    if (hoveredWardId) {
        map.setFeatureState(
            { source: "wards", id: hoveredWardId },
            { hover: false }
        );
    }
}

function selectWard(tokyo, map, prevWardId, wardId) {
    removePlaceholder();
    deselectCurrentWard(prevWardId);

    map.setFeatureState(
        { source: "wards", id: wardId },
        { hover: true }
    );

    var currentWard = getWardFromId(tokyo, wardId);

    fetch('../data/cases.json')
		.then(response => response.json())
		.then(json => {
			// json = cases by ward
			const wardHistory = getHistory(currentWard, json);
            drawWardChart(currentWard, wardHistory);
        });
}

function flyToPoint(point) {
    map.flyTo({
        center: point,
        zoom: 9.5,
        'essential': true, // this animation is considered essential with respect to prefers-reduced-motion
      });
}

function getHistory(currentWard, cases) {
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

function onWardSelect(id) {
    for (ward of tokyo['features']) {
        if (ward.id == id) {
            selectWard(id);
            var center = eval(ward['properties']['center']);
            //alert(center);
            //alert(typeof center);
            flyToPoint(center);
            break;
        }
    }
}