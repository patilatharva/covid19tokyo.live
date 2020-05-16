const plotPositivityChart = (data) => {
    
    var dates = [];
    var positivityVals = [];
  
    for (const record of data["data"]) {
		const date = new Date(record["diagnosed_date"]);
		dates.push(date.getMonth() + 1 + "/" + date.getDate());
        positivityVals.push(record["positive_rate"]);
    }
  
    console.log(data["data"]);

    dates = dates.slice(dates.length - 60);
    var ctx = document.getElementById("positivityChart").getContext("2d");
  
    // line chart of cases over time of ward that cursor hovers over on the map.
    var overallChart = new Chart(ctx, {
		type: "line",
		data: {
			// slice is used to include data from the last 60 days only.
			labels: dates,
			datasets: [{
				label: lang.positivityLabel,
				data: positivityVals.slice(positivityVals.length - 60),
				borderColor: "rgba(255, 7, 57, 0.8)",
				fill: false,
            }
            /*
            , {
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
            }
            */
            ],
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
  
export default plotPositivityChart;