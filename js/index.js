import plotAllWardsChart from './charts/allWardsChart.js';
import {initializeDailyChart, plotDailyChart} from './charts/dailyChart.js';
import plotOverallChart from './charts/overallChart.js';
import plotPositivityChart from './charts/positivityChart.js';
import plotAgeGenderChart from './charts/ageGenderChart.js';
import {getTodayData, fillSummaryCard} from './summary.js';
import getNews from './news.js';

$(document).ready(function() {

	fetch('../data/deaths.json')
		.then(response => response.json())
		.then(json => {
			var deaths = json;
			
			fetch('../data/discharged.json')
				.then(response => response.json())
				.then(json => {
					var discharged = json;
					
					// data from Tokyo Govt's official covid-19 website
					const overallDataUrl =
						"https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";
					
					fetch(overallDataUrl)
						.then(response => response.json())
						.then(json => {
							const summary = json;

							plotOverallChart({
								deaths: deaths,
								discharged: discharged,
								summary: summary
							});
							
							const latestData = getTodayData({
								summary: summary,
								deaths: deaths,
								discharged: discharged,
							});
							fillSummaryCard(latestData);
							console.log(summary)
							//plotAgeGenderChart(summary["patients"]);

							initializeDailyChart({
								summary: summary,
								deaths: deaths
							});
				
						});
				});	
		});

	const positivityUrl = 
		"https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/development/data/positive_rate.json";

	fetch(positivityUrl)
		.then(response => response.json())
		.then(json => {
			// json = testing data and positivity per day
			plotPositivityChart(json);
			showLatestPositivity(json);
		});

	fetch("../data/wardCases.json")
		.then(response => response.json())
		.then(json => {
			// json = cases by ward
			plotAllWardsChart(json.wardHistory);
		});

	getNews();
});

/**
 * Displays the latest positivity rate next to the "Testing and 
 * Positivity Rate" card's title
 * 
 * @param {object} positivityData object positivity rates for each day
 */
const showLatestPositivity = (positivityData) => {
	const posValues = positivityData.data;
	const latest = posValues[posValues.length - 1];
	
	const posRate = latest.positive_rate;
	var timestamp = new Date(latest.diagnosed_date);
	const periodEnd = (timestamp.getMonth() + 1) + "/" + (timestamp.getDate());
	timestamp.setDate(timestamp.getDate() - 6);
	const periodStart = (timestamp.getMonth() + 1) + "/" + (timestamp.getDate());

	$("#pos-latest-rate").html(posRate + "%");
	$("#pos-latest-period").html(`${periodStart}-${periodEnd} ${lang.average}`);
}

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