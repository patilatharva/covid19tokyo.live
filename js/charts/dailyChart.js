export {initializeDailyChart, plotDailyChart};

// Variable to destroy previous instances of the chart
var dailyChart;

/**
 * store lists for new cases, deaths and tests per day in localStorage.
 * initially plot a chart for new cases per day.
 * 
 * @param {JSON} data	Tokyo covid-19 data
 */
const initializeDailyChart = (data) => {

	const summary = data.summary;
	const deaths = data.deaths;
  
	var tokyoTestData = summary["inspections_summary"]["data"]["都内"]; // "その他"
	var otherTestData = summary["inspections_summary"]["data"]["その他"];
	var casesData = summary["patients_summary"]["data"];
	var deathData = Object.values(deaths);
	var labels = summary["inspections_summary"]["labels"];

	var totalTests = 0;

	// All data arrays
	var cumulativeTests = [];
	var testsPerDay = [];
	var casesPerDay = [];
	var deathsPerDay = [];
	var prevDayDeaths = 0;

	// Initializing all arrays
	for (var i = 0; i < tokyoTestData.length; i++) {
		var dayTests = 0;

		totalTests += tokyoTestData[i];
		dayTests += tokyoTestData[i];

		if (otherTestData[i]) {
			totalTests += otherTestData[i];
			dayTests += otherTestData[i];
		} else {
			totalTests += 0;
		}

		casesPerDay.push(casesData[i]["小計"]);
		testsPerDay.push(dayTests);
		cumulativeTests.push(totalTests);

		deathsPerDay.push(deathData[i] - prevDayDeaths);
		prevDayDeaths = deathData[i];
	}
	// setting items to local storage to prevent running this function multiple times
	localStorage.setItem("labels", JSON.stringify(labels));
	localStorage.setItem("testsPerDay", JSON.stringify(testsPerDay));
	localStorage.setItem("cumulativeTests", JSON.stringify(cumulativeTests));
	localStorage.setItem("casesPerDay", JSON.stringify(casesPerDay));
	localStorage.setItem("deathsPerDay", JSON.stringify(deathsPerDay));

	// Initially setting the plot to tests per day
	plotDailyChart(labels, casesPerDay, "confirmed");
};

/**
 * 
 * @param {string list} labels		x-axis labels; dates of past 60 days
 * @param {int list} dataset 		new cases, deaths or tests per day depending on user selection
 * @param {string} type 			"confirmed", "deaths" or "tests"
 */
const plotDailyChart = (labels, dataset, type) => {
	var ctx = document.getElementById("dailyChart").getContext("2d");

	// destroy previous instance of chart to prevent glitching
	if (dailyChart) dailyChart.destroy();

	dataset = dataset.slice(dataset.length - 90);

	var backgroundColor = "", borderColor = "";

	if (type === "confirmed") {
		backgroundColor = "rgba(0, 123, 255, 0.5)";
		borderColor = "rgba(0, 123, 255, 1)";
	} else if (type === "deaths") {
		backgroundColor = "rgba(255, 7, 58, 0.5)";
		borderColor = "rgba(255, 7, 58, 1)";
	} else {
		backgroundColor = "rgba(40, 167, 69, 0.5)";
		borderColor = "rgba(40, 167, 69, 1)";
	}

	dailyChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels.slice(labels.length - 90),
			datasets: [{
				label: lang[type + "Label"],
				data: dataset,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: 1,
			}],
		},
		options: {
			plugins: {
				datalabels: {
					font: {
						size: 0,
					},
					color: "black",
				},
				responsive: true,
				maintainAspectRatio: false,
			},
			maintainAspectRatio: false,
			tooltips: {
				mode: "index",
				intersect: false,
			},
			hover: {
				mode: "index",
				intersect: false,
			},
			legend: {
				display: false,
			},
			layout: {
				padding: 10,
			},
			scales: {
				yAxes: [{
					ticks: {
						fontSize: 12,
						beginAtZero: true,
						suggestedMax: Math.max(...dataset) + 1
					}
				}],
			}
		},
	});
};
