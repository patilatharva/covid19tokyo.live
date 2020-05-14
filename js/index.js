import {initializeMap, loadMapData, addWards, addLabels} from './drawMap.js';
import {allWardsChart} from './charts/allWards.js';
import {plotDailyChart, plotDailyChartHelper} from './charts/dailyChart.js';
import {plotOverallChart} from './charts/overallChart.js';
import {plotAgeGenderChart} from './charts/ageGenderChart.js';
import {parseCoronaData, fillCards} from './summary.js';

var data = {};
let url =
  "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";
//getJSON(url);

fetch(url)
    .then(response => response.json())
	.then(json => {
		data = json;
		plotOverallChart(json);
	
		data = parseCoronaData(json);
		fillCards(data);
		plotAgeGenderChart(json["patients"]);
		plotDailyChart(json);
		data = json;
	});

	fetch('../data/cases.json')
    .then(response => response.json())
	.then(json => {
		var casesByWard = json;
		allWardsChart(casesByWard);
	});


var map = initializeMap();

map.on("load", function () {
	loadMapData(map);
});


$("#dailyChartSelect").change(function () {
	var item = $(this);
	if (item.val() === "casesPerDay") {
		var type = "confirmed";
	} else if (item.val() === "deathsPerDay") {
		var type = "deaths";
	} else {
		var type = "tests";
	}

	var data = JSON.parse(localStorage.getItem(item.val()));
	var labels = JSON.parse(localStorage.getItem("labels"));

	plotDailyChartHelper(labels, data, type);
});