import {drawWardChart} from './charts/wardChart.js';
import {map} from './charts/tokyoMap.js';
export {flyToPoint, selectWard, getWardFromId, deselectCurrentWard, onWardSelect};

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
    deselectCurrentWard(map, prevWardId);

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

function onWardSelect(tokyo, map, hoveredWardId, wardId) {
    for (const ward of tokyo['features']) {
        if (ward.id == wardId) {
            selectWard(tokyo, map, hoveredWardId, wardId);
            var center = eval(ward['properties']['center']);
            //alert(center);
            //alert(typeof center);
            flyToPoint(center);
            break;
        }
    }
}

function blueGradient(context) {
    var gradient = context.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(0, 123, 255, 0.8)");
    gradient.addColorStop(0.2, "rgba(0, 123, 255, 0.6)");
    gradient.addColorStop(0.5, "rgba(0, 123, 255, 0.4)");
    gradient.addColorStop(0.8, "rgba(0, 123, 255, 0.2)");
    gradient.addColorStop(1, "rgba(0, 123, 255, 0.1)");
    
    return gradient
}