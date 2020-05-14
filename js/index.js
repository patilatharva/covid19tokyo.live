import {map} from './drawMap.js';
import {allWardsChart} from './charts/allWards.js';
import {plotDailyChart, plotDailyChartHelper} from './charts/dailyChart.js';
import {plotOverallChart} from './charts/overallChart.js';
import {parseData, fillCards} from './summary.js';

var data = {};
let url =
  "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";
//getJSON(url);

fetch(url)
    .then(response => response.json())
	.then(json => {
		data = json;
		plotOverallChart(json);
	
		data = parseData(json);
		fillCards(data);
		// plotOverallChart(json["patients_summary"]);
		//drawAgeGenderChart(json["patients"]);
		plotDailyChart(json);
		data = json;
	});

/*
function callback(status, response) {
	if (status) {
		alert(status);
	} else {
		data = response;
		plotOverallChart(response);
	
		data = parseData(response);
		fillCards(data);
		// plotOverallChart(response["patients_summary"]);
		drawAgeGenderChart(response["patients"]);
		plotDailyChart(response);
		data = response;
	}
}
	
var getJSON = function (url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.responseType = "json";
	xhr.onload = function () {
		var status = xhr.status;
		if (status === 200) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};
	
*/








allWardsChart();

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