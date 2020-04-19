function removePlaceholder() {
    var placeholder = document.getElementById('placeholder');
    placeholder.style.display = 'none';

    var chart = document.getElementById('wardHistoryChart');
    chart.style.display = 'block';
}

// returns english name of ward, assuming input name is in Japanese
function toEnglish(name_ja) {
    for (const ward of tokyo['features']) {
        if (ward['properties']['ward_ja'] === name_ja) {
            return ward['properties']['ward_en'];
        }
    }
    return 'unknown ward';
}

function getWardFromId(id) {
    for (ward of tokyo['features']) {
        if (ward['id'] == id) {
            return ward
        }
    }
}

function deselectCurrentWard() {
    if (hoveredWardId) {
        map.setFeatureState(
          { source: "wards", id: hoveredWardId },
          { hover: false }
        );
      }
}

function selectWard(wardId) {
    removePlaceholder();
    deselectCurrentWard();

    map.setFeatureState(
      { source: "wards", id: wardId },
      { hover: true }
    );
    hoveredWardId = wardId

    var currentWard = getWardFromId(wardId);
    drawWardChart(currentWard);
}

function flyToPoint(point) {
    map.flyTo({
        center: point,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
}

function blueGradient(context) {
    var gradient = context.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(29, 90, 185, 0.8)");
    gradient.addColorStop(0.2, "rgba(29, 90, 185, 0.6)");
    gradient.addColorStop(0.5, "rgba(29, 90, 185, 0.4)");
    gradient.addColorStop(0.8, "rgba(29, 90, 185, 0.2)");
    gradient.addColorStop(1, "rgba(29, 90, 185, 0.1)");
    
    return gradient
}

function getHistory(currentWard) {
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

function initializeOptions(selectId, geo) {
    for (var ward of geo['features']) {
        var name = ward.properties.ward_ja;
        var id = ward.properties.code;

        

        $(selectId).append($('<option>', {
            value: id,
            text: name
        })).selectpicker('refresh');
    }
}