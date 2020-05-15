import {plotAllWardsChart} from './charts/allWardsChart.js';
import {initializeDailyChart, plotDailyChart} from './charts/dailyChart.js';
import {plotOverallChart} from './charts/overallChart.js';
import {plotAgeGenderChart} from './charts/ageGenderChart.js';
import {getTodayData, fillSummaryCard} from './summary.js';
import {getNews} from './news.js';

$(document).ready(function() {

	var deaths;
	fetch('../data/deaths.json')
		.then(response => response.json())
		.then(json => {
			deaths = json;
		});

	var discharged;
	fetch('../data/discharged.json')
		.then(response => response.json())
		.then(json => {
			discharged = json;
		});

	// data from Tokyo Govt's official covid-19 website
	const url =
		"https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";

	fetch(url)
		.then(response => response.json())
		.then(json => {
			plotOverallChart({
				deaths: deaths,
				discharged: discharged,
				summary: json
			});

			const latestData = getTodayData({
				summary: json,
				deaths: deaths,
				discharged: discharged,
			});
			fillSummaryCard(latestData);

			plotAgeGenderChart(json["patients"]);
			initializeDailyChart({
				summary: json,
				deaths: deaths
			});
		});

	fetch('../data/cases.json')
		.then(response => response.json())
		.then(json => {
			// json = cases by ward
			plotAllWardsChart(json);
		});

	getNews();
});

/**
 * Show cases/death/testing daily numbers depending on selection
 */
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

	plotDailyChart(labels, data, type);
});

$('#en_us').click(function(){
	window.location.href='https://covid19tokyo.live/en/'
});
  
$('#ja').click(function(){
	window.location.href='https://covid19tokyo.live/'
});