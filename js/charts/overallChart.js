const plotOverallChart = (data) => {
    // plot chart
    // patientData: array containing number of new cases each day; sample in temp.json -> patients_summary
    var patientData = data["summary"]["patients_summary"]["data"];
    // dischargeData: array containing number of new discharges each day: sample in temp.json -> discharges_summary
    // var dischargeData = data["discharges_summary"]["data"];
    var dischargedData = Object.values(data["discharged"]);
    var cases = []; // number of cases
    var recovered = []; // number of discharges
    var dates = []; // x axis (labels)
    var deaths = [];
    var active = [];

    let deathData = Object.values(data["deaths"]);
    var caseTotal = 0;
    var deathsTotal = 0;
  
    for (var i = 0; i < patientData.length; i++) {
		caseTotal += patientData[i]["小計"];
		cases.push(caseTotal);
	
		deathsTotal += deathData[i];
		deaths.push(deathsTotal);
	
		if (dischargedData[i]) {
			var recov = dischargedData[i]; // - deathsTotal;
			recovered.push(recov);
			active.push(caseTotal - recov - deathsTotal);
		} else {
			recovered.push(null);
			active.push(null);
		}
		
		var date = new Date(patientData[i]["日付"]);
		dates.push(date.getMonth() + 1 + "/" + date.getDate());
    }
  
    dates = dates.slice(dates.length - 60);
    var ctx = document.getElementById("totalCasesChart").getContext("2d");
  
    // line chart of cases over time of ward that cursor hovers over on the map.
    var overallChart = new Chart(ctx, {
		type: "line",
		data: {
			// slice is used to include data from the last 60 days only.
			labels: dates,
			datasets: [{
				label: lang.confirmedLabel,
				data: cases.slice(cases.length - 60),
				borderColor: "rgba(255, 7, 57, 0.8)",
				fill: false,
			}, {
				label: lang.activeLabel,
				data: active.slice(active.length - 60),
				borderColor: "rgba(0, 123, 255, 0.8)",
				fill: false,
			}, {
				label: lang.recoveredLabel,
				data: recovered.slice(recovered.length - 60),
				borderColor: "rgba(40, 167, 69, 0.8)",
				fill: false,
			}, {
				label: lang.deathsLabel,
				data: deaths.slice(deaths.length - 60),
				borderColor: "rgba(108, 117, 125, 0.8)",
				fill: false,
			}],
		}, 
		options: {
			tooltips: {
				mode: "index",
				intersect: false,
			},
			hover: {
				mode: "index",
				intersect: false,
			},
			plugins: {
				datalabels: {
					font: {
						// disabling labels as chart becomes too cluttered.
						size: 0,
					},
				},
			},
			elements: {
				line: {
					tension: 0,
				},
				point: {
					radius: 2,
					backgroundColor: (context) => {
						return context.dataset.borderColor;
					},
				},
			},
			legend: {
				display: true,
			},
			maintainAspectRatio: false,
			scales: {
				yAxes: [
					{
						ticks: {
							suggestedMin: 0,
						},
					},
				],
			},
		}
    });
}
  
export default plotOverallChart;