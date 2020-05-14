export {map};

var tokyo = {};
fetch("../data/tokyo.geojson")
    .then(response => response.json())
    .then(json => tokyo = json);

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

map.on("load", function () {
    // Add a GeoJSON source containing place coordinates and information.
  
    // tokyo: geojson object of tokyo district shapefiles imported from tokyo.js
    var districts = tokyo["features"];
  
    // sample data returned by Tokyo coronavirus cases api; will integrate the actual api later:
    // includes cases count and rough district centerpoints (not accurate enough for production)
    var api_districts = cases["features"];
  
    // get the latest 62 records (62 districts in total)
    api_districts = api_districts.slice(api_districts.length - 62);
  
    // geojson of all labels
    var labels = {
      name: "labels",
      type: "FeatureCollection",
      features: [],
    };
  
    for (let i = 0; i < districts.length; i++) {
		var name_jp = districts[i]["properties"]["ward_ja"];
	
		for (let j = 0; j < api_districts.length; j++) {
			var api_name = api_districts[j]["properties"]["団体名"];
			if (name_jp === api_name) {
				// add cases count to our geojson
				var count = api_districts[j]["properties"]["件数"] || 0;
				districts[i]["properties"]["cases"] = count;
				//casesMaxValue = Math.max(count + 10, casesMaxValue);

				// add centerpoint (label location) to our geojson
				districts[i]["properties"]["center"] =
				api_districts[j]["geometry"]["coordinates"];
				// format our geojson's id
				districts[i]["id"] = districts[i]["properties"]["code"];

				var ward = districts[i]["properties"][lang.wardLang];
				var center = api_districts[j]["geometry"]["coordinates"];

				// label name
				var label = ward.split(" ")[0] + "\n" + districts[i]["properties"]["cases"];

				// add label
				labels["features"].push({
				type: "Feature",
				properties: {
					label_ja: label,
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
	
	initializeOptions("#ward-picker", tokyo);
    
    // district shapes
    map.addSource("wards", {
      type: "geojson",
      data: tokyo,
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
  
    // place labels
    map.addSource("labels", {
      type: "geojson",
      data: labels,
    });
  
    map.addLayer({
      id: "casesLabels",
      type: "symbol",
      source: "labels",
      layout: {
        "text-field": ["get", "label_ja"],
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
  
    map.scrollZoom.disable();
  });

  map.on("click", "wards", function (e) {
    var center = eval(e.features[0].properties.center);
    flyToPoint(center);
  });
  
  /*
  // access ward data on hover
  map.on("mousemove", "wards", function (e) {
    // change cursor to pointer
    map.getCanvas().style.cursor = "pointer";
  
    // select ward and plot chart if user hovers on ward
    if (!hoveredWardId || hoveredWardId != e.features[0].id) {
      selectWard(e.features[0].id);
    }
  });
  
  // Change cursor back to default when it leaves
  map.on("mouseleave", "wards", function (e) {
    map.getCanvas().style.cursor = "";
  });
  */
  
  map.addControl(
    new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true,
    })
  );