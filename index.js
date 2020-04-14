mapboxgl.accessToken = 'pk.eyJ1IjoicGF0aWxhdGhhcnZhIiwiYSI6ImNrOHN3MG5yczAzNzYzcW53anExZXZhNzkifQ.tZlhVCnq5qVYs3cEQbdSdw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [139.6856122, 35.6488799],
    zoom: 9,
    minZoom: 8,
    maxZoom: 11
});

var hoveredWardId = null;
// history of cases in hovered over ward
var wardHistory = {};

map.on('load', function() {
    // Add a GeoJSON source containing place coordinates and information.
    
    // tokyo: geojson object of tokyo district shapefiles imported from tokyo.js
    var districts = tokyo['features'];
    
    // sample data returned by Tokyo coronavirus cases api; will integrate the actual api later:
    // https://services6.arcgis.com/5jNaHNYe2AnnqRnS/arcgis/rest/services/COVID19_JapanData_Tokyo/FeatureServer/0/query?where=%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89%3E0&returnIdsOnly=false&returnCountOnly=false&f=pgeojson&outFields=*&orderByFields=%E5%85%AC%E8%A1%A8%E6%97%A5,%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89
    // includes cases count and rough district centerpoints (not accurate enough for production)
    var api_districts = cases['features'];

    // only consider today's data
    api_districts = api_districts.filter(ward => ward['properties']['公表日'] == 1586476800000);

    // geojson of all labels
    var labels = {
        "name":"labels",
        "type":"FeatureCollection",
        "features":[]
    };

    for (i = 0; i < districts.length; i++) {
        var name_jp = districts[i]['properties']['ward_ja'];

        for (j = 0; j < api_districts.length; j++) {
            var api_name = api_districts[j]['properties']['団体名'];
            if (name_jp === api_name) {
                // add cases count to our geojson
                districts[i]['properties']['cases'] = api_districts[j]['properties']['件数'];
                // add centerpoint (label location) to our geojson 
                districts[i]['properties']['center'] = api_districts[j]['geometry']['coordinates'];
                // format our geojson's id
                districts[i]['id'] = districts[i]['properties']['code'];

                var ward = districts[i]['properties']['ward_en'];
                var center = api_districts[j]['geometry']['coordinates'];

                // label name
                var label = ward.split(' ')[0] + '\n' + districts[i]['properties']['cases'];
                labels['features'].push({
                    'type': 'Feature',
                    'properties': {
                        'name': label
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': center
                    }
                });
                break;
            }
        }
    }
    
    // district shapes
    map.addSource('wards', {
        'type': 'geojson',
        'data': tokyo
    });


    // fill district shapes
    map.addLayer({
        'id': 'wards',
        'type': 'fill',
        'source': 'wards',
        'paint': {
            'fill-color': {
                property: 'cases',
                stops: [
                    [0, '#fff'],
                    [10, '#ffffb2'],
                    [30, '#fecc5c'],
                    [50, '#fd8d3c'],
                    [90, '#e31a1c']
                ]
            },
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                0.9,
                0.75
            ]
        }
    });

    // draw district boundaries
    map.addLayer({
        'id': 'ward-lines',
        'type': 'line',
        'source': 'wards',
        'paint': {
            'line-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                '#555',
                '#555'
            ],
            'line-width': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                2.5,
                0.8
            ]
        }
    });

    // place labels
    map.addSource('labels', {
        'type': 'geojson',
        'data': labels
    })

    map.addLayer({
        'id': 'poi-labels',
        'type': 'symbol',
        'source': 'labels',
        'layout': {
            'text-field': ['get', 'name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0,
            'text-justify': 'center',
            'text-size': 10,
        },
        'paint': {
            'text-halo-color': 'white',
            'text-halo-width': 1.2,
            'text-halo-blur': 0
        }
    });

    // center to ward on click
    map.on('click', 'wards', function(e) {
        map.flyTo({
        center: eval(e.features[0].properties.center),
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    // access ward data on hover
    map.on('mousemove', 'wards', function(e) {
        // change cursor to pointer
        map.getCanvas().style.cursor = 'pointer';

        document.getElementById('test').innerHTML 
            = 'Ward: ' + e.features[0].properties.ward_en + '<br/>Cases: ' + e.features[0].properties.cases + '<br/> Hit Cmd+Opt+I -> Console for more info';
        
        if (hoveredWardId) {
            map.setFeatureState(
                { source: 'wards', id: hoveredWardId },
                { hover: false }
            );
        }

        // get cases history if user's cursor enters ward
        if (!hoveredWardId || hoveredWardId != e.features[0].id) {
            // get cases history for the ward
            var history = cases['features'].filter(ward => ward['properties']['団体名'] === e.features[0].properties.ward_ja);
            
            // key: timestamp of date, val: num of cases
            var casesHistory = {}
            history.forEach(ward => {
                
                var timestamp = ward['properties']['公表日'];
                /*
                optional date formatting:

                var date = new Date(ward['properties']['公表日']);
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var date_formatted = month + '-' + day + '-' + year;
                */
                casesHistory[timestamp] = ward['properties']['件数'];
            });

            history = {
                'name_en': e.features[0].properties.ward_en,
                'name_ja': e.features[0].properties.ward_ja,
                'history': casesHistory
            };

            // see history of that ward in console
            console.log(history);
            // store data in global variable
            wardHistory = history;
        }

        hoveredWardId = e.features[0].id;
        map.setFeatureState(
            { source: 'wards', id: hoveredWardId },
            { hover: true }
        );
    });

    // Change cursor back to default when it leaves
    map.on('mouseleave', 'wards', function(e) {
        map.getCanvas().style.cursor = '';
    });
});

map.addControl(new mapboxgl.NavigationControl({
    showCompass: false,
    showZoom: true
}));