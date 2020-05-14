import {initializeMap, plotMapData, addWards, addLabels} from './drawMap.js';
import {plotAllWardsChart} from './charts/allWardsChart.js';
import {plotDailyChart, plotDailyChartHelper} from './charts/dailyChart.js';
import {plotOverallChart} from './charts/overallChart.js';
import {plotAgeGenderChart} from './charts/ageGenderChart.js';
import {getTodaysData, fillCards} from './summary.js';
import {initializeOptions} from './utils.js';

var casesByWard, deaths, discharged;

$(document).ready(function() {
	let url =
		"https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";

	fetch('../data/deaths.json')
		.then(response => response.json())
		.then(json => {
			deaths = json;
		});

	fetch('../data/discharged.json')
		.then(response => response.json())
		.then(json => {
			discharged = json;
		});

	fetch(url)
		.then(response => response.json())
		.then(json => {
			plotOverallChart({
				deaths: deaths,
				discharged: discharged,
				other: json
			});

			var latestData = getTodaysData({
				summary: json,
				deaths: deaths,
				discharged: discharged,
			});
			fillCards(latestData);

			plotAgeGenderChart(json["patients"]);
			plotDailyChart({
				summary: json,
				deaths: deaths
			});
		});

	fetch('../data/cases.json')
		.then(response => response.json())
		.then(json => {
			casesByWard = json;
			plotAllWardsChart(casesByWard);
		});

	/*
	fetch('../data/tokyo.geojson')
		.then(response => response.json())
		.then(json => {
			initializeOptions("#ward-picker", json);
		});
	*/
	

	var map = initializeMap();
	map.on("load", function () {
		plotMapData(map, casesByWard);
	});
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

$('#en_us').click(function(){
	window.location.href='https://covid19tokyo.live/en/'
});
  
$('#ja').click(function(){
	window.location.href='https://covid19tokyo.live/'
});