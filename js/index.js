//import {initializeMap, plotMapData, addWards, addLabels} from './charts/tokyoMap.js';
import {plotAllWardsChart} from './charts/allWardsChart.js';
import {plotDailyChart, plotDailyChartHelper} from './charts/dailyChart.js';
import {plotOverallChart} from './charts/overallChart.js';
import {plotAgeGenderChart} from './charts/ageGenderChart.js';
import {getTodaysData, fillCards} from './summary.js';
import {getNews} from './news.js';

export {casesByWard};

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

	getNews();
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