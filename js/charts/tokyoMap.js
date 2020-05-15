import {flyToPoint, selectWard, onWardSelect, deselectCurrentWard, getWardFromId} from '../utils.js';

/**
 * Initializes interactive Mapbox map.
 */
const initializeMap = () => {
	// replace the following with your Mapbox token
	mapboxgl.accessToken =
		"pk.eyJ1IjoicGF0aWxhdGhhcnZhIiwiYSI6ImNrOHN3MG5yczAzNzYzcW53anExZXZhNzkifQ.tZlhVCnq5qVYs3cEQbdSdw";

	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/patilatharva/ck976z7w94gsc1in2kam1txd5",
		center: [139.7338123, 35.684163],
		zoom: 9,
		minZoom: 8,
		maxZoom: 11,
	});

	map.scrollZoom.disable();

	map.addControl(
		new mapboxgl.NavigationControl({
			showCompass: false,
			showZoom: true,
		})
	);

	return map;
}

var map = initializeMap();

// geojson object of Tokyo's districts
var tokyoGeo;

/**
 * 
 * @param {Mapbox map} map			map object which is to be populated
 * @param {GeoJSON} casesByWard 	object containing the history of cases in each ward
 */
const plotMapData = (map, casesByWard) => {
	fetch("../data/tokyo.geojson")
		.then(response => response.json())
		.then(json => {
			tokyoGeo = json;
			var districts = tokyoGeo["features"];
			var api_districts = casesByWard["features"];
		
			// get the latest 62 records (62 districts in total)
			api_districts = api_districts.slice(api_districts.length - 62);
		
			// geojson of all labels
			var labels = {
				name: "labels",
				type: "FeatureCollection",
				features: [],
			};
		
			for (let district of districts) {
				var name_jp = district["properties"]["ward_ja"];
			
				for (let api_district of api_districts) {
					var api_name = api_district["properties"]["団体名"];
					if (name_jp === api_name) {
						var count = api_district["properties"]["件数"] || 0;
						district["properties"]["cases"] = count;
						var ward = district["properties"][lang.wardLang];
						var center = district["properties"]["center"];

						// label name
						var label = ward.split(" ")[0] + "\n" + count;

						// add label
						labels["features"].push({
							type: "Feature",
							properties: {
								ward_label: label,
							},
							geometry: {
								type: "Point",
								coordinates: center,
							},
						});
						break;
					}
				}
			}

			//initializeOptions("#ward-picker", tokyoGeo);
			addWards(map, tokyoGeo);
			addLabels(map, labels)
		});
}

/**
 * adds ward shapes to map
 *  
 * @param {Mapbox map} map 		interative map
 * @param {GeoJSON} tokyoGeo	GEOJSON of tokyo's wards
 */
const addWards = (map, tokyoGeo) => {
	// district shapes
    map.addSource("wards", {
		type: "geojson",
		data: tokyoGeo,
	});
	
	// fill district shapes
	map.addLayer({
		id: "wards",
		type: "fill",
		source: "wards",
		paint: {
			"fill-color": {
			property: "cases",
			stops: [
				[0, "#ffffb2"],
				[50, "#fecc5c"],
				[100, "#fd8d3c"],
				[200, "#e31a1c"],
				[300, "#bd0026"],
			],
			},
			"fill-opacity": [
			"case",
			["boolean", ["feature-state", "hover"], false],
			0.9,
			0.75,
			],
		},
	});
	
	// draw district boundaries
	map.addLayer({
		id: "ward-lines",
		type: "line",
		source: "wards",
		paint: {
			"line-color": [
			"case",
			["boolean", ["feature-state", "hover"], false],
			"#555",
			"#555",
			],
			"line-width": [
			"case",
			["boolean", ["feature-state", "hover"], false],
			2.5,
			0.8,
			],
		},
	});
};

/**
 * adds ward borders to map
 * 
 * @param {Mapbox map} map
 * @param {GeoJSON} labels 		GeoJSON object containing labels' text and coordinates
 */
const addLabels = (map, labels) => {
	map.addSource("labels", {
		type: "geojson",
		data: labels,
	});
	
	map.addLayer({
		id: "casesLabels",
		type: "symbol",
		source: "labels",
		layout: {
			"text-field": ["get", "ward_label"],
			"text-variable-anchor": ["top", "bottom", "left", "right"],
			"text-radial-offset": 0,
			"text-justify": "center",
			"text-size": 10,
		},
		paint: {
			"text-halo-color": "white",
			"text-halo-width": 1.2,
			"text-halo-blur": 0,
		},
	});
}
  

map.on("load", function () {
	fetch('../data/cases.json')
		.then(response => response.json())
		.then(json => {
			// json = cases by ward
			plotMapData(map, json);
		});
});

map.on("click", "wards", function (e) {
	var center = eval(e.features[0].properties.center);
	flyToPoint(center);
});


// id of ward user is currently hovering on
// this ward will have a thicker border than the others
var hoveredWardId = null;

/**
 * access ward data on hover.
 */
map.on("mousemove", "wards", function (e) {
    // change cursor to pointer
    map.getCanvas().style.cursor = "pointer";
  
    // select ward and plot chart if user hovers on ward
    if (!hoveredWardId || hoveredWardId != e.features[0].id) {
		selectWard(tokyoGeo, map, hoveredWardId, e.features[0].id);
		hoveredWardId = e.features[0].id;
    }
});

/**
 * Change cursor back to default when it leaves.
 */
map.on("mouseleave", "wards", function (e) {
	map.getCanvas().style.cursor = "";
});

/**
 * Zoom towards and highlight ward selected from <select> menu
 */
$( "#ward-picker" ).change(function() {
	const wardId = $(this).children("option:selected").val();
	onWardSelect(tokyoGeo, map, hoveredWardId, wardId);
	hoveredWardId = wardId;
});

export default map;