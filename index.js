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

map.on('load', function() {
    // Add a GeoJSON source containing place coordinates and information.
    
    var districts = tokyo['features'];
    var api_districts = cases['features'];

    // only consider today's data
    api_districts = api_districts.filter(ward => ward['properties']['公表日'] == 1586476800000);

    var centers = {
        "name":"centers",
        "type":"FeatureCollection",
        "features":[]
    };

    for (i = 0; i < districts.length; i++) {
        var name_jp = districts[i]['properties']['ward_ja'];

        for (j = 0; j < api_districts.length; j++) {
            var api_name = api_districts[j]['properties']['団体名'];
            if (name_jp === api_name) {
                districts[i]['properties']['cases'] = api_districts[j]['properties']['件数'];
                districts[i]['properties']['center'] = api_districts[j]['geometry']['coordinates'];
                districts[i]['id'] = districts[i]['properties']['code'];

                var ward = districts[i]['properties']['ward_en'];
                var center = api_districts[j]['geometry']['coordinates'];
                var label = ward.split(' ')[0] + '\n' + districts[i]['properties']['cases'];
                centers['features'].push({
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
    
    map.addSource('wards', {
        'type': 'geojson',
        'data': tokyo
    });


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
                0.65
            ]
        }
    });

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

    map.addSource('centers', {
        'type': 'geojson',
        'data': centers
    })

    map.addLayer({
        'id': 'poi-labels',
        'type': 'symbol',
        'source': 'centers',
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


    map.on('click', 'wards', function(e) {
        map.flyTo({
        center: eval(e.features[0].properties.center),
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    map.on('mousemove', 'wards', function(e) {
        map.getCanvas().style.cursor = 'pointer';
        document.getElementById('test').innerHTML 
            = 'Ward: ' + e.features[0].properties.ward_en + '<br/>Cases: ' + e.features[0].properties.cases;

        if (hoveredWardId) {
            map.setFeatureState(
                { source: 'wards', id: hoveredWardId },
                { hover: false }
            );
        }
        hoveredWardId = e.features[0].id;
        map.setFeatureState(
            { source: 'wards', id: hoveredWardId },
            { hover: true }
        );
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'wards', function(e) {
        map.getCanvas().style.cursor = '';
    });
});

map.addControl(new mapboxgl.NavigationControl());

