import {
  flyToPoint,
  selectWard,
  onWardSelect,
  deselectCurrentWard,
  getWardFromId,
} from "../utils.js";

import config from "../../config.js";

/**
 * Initializes interactive Mapbox map.
 */
const initializeMap = () => {
  // replace the following with your Mapbox token
  mapboxgl.accessToken = config.MAPBOX_KEY;
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
};

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
    .then((response) => response.json())
    .then((json) => {
      tokyoGeo = json;
      var districts = tokyoGeo["features"];
      var api_districts = casesByWard;

      // get the latest 62 records (62 districts in total)
      //api_districts = api_districts.slice(api_districts.length - 62);

      // geojson of all labels
      const labels = {
        name: "labels",
        type: "FeatureCollection",
        features: [],
      };

      for (var district of districts) {
        const name = district.properties.ward_en;

        for (const api_district of api_districts) {
          const api_name = api_district.name_en;
          if (name === api_name) {
            const history = Object.values(api_district.history);
            const count = history[history.length - 1];
            district.properties.cases = count;
            const ward = district.properties[lang.wardLang];
            const center = district.properties.center;

            // label name
            const label = ward.split(" ")[0] + "\n" + count;

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
      addLabels(map, labels);
    });
};

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
};

map.on("load", function () {
  fetch("../data/wardCases.json")
    .then((response) => response.json())
    .then((json) => {
      // json = cases by ward
      plotMapData(map, json.wardHistory);
    });
});

map.on("click", "wards", function (e) {
  var center = eval(e.features[0].properties.center);
  flyToPoint(center);
});

// id of the ward that user is currently hovering on
// this ward will have a thicker border than the others
var hoveredWardId = null;

/**
 *  'select' a ward data on hover -> highlight ward and show ward history chart.
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
 * Change cursor back to default when it leaves the wards.
 */
map.on("mouseleave", "wards", function (e) {
  map.getCanvas().style.cursor = "";
});

/**
 * Zoom towards and highlight ward selected from <select> menu.
 */
$("#ward-picker").change(function () {
  const wardId = $(this).children("option:selected").val();
  onWardSelect(tokyoGeo, map, hoveredWardId, wardId);
  hoveredWardId = wardId;
});

export default map;
