const plotAllWardsChart = (casesByWard) => {

    // Declaring arrays to use in the chart.
    var labels = [];
    var data = [];
  
	for (const ward of casesByWard) {
		if (lang == en_us) {
			labels.push(ward.name_en.replace(' ', '-'));
		} else {
			labels.push(ward.name_ja);
		}
		
		// latest no. of cases in ward
		const cases = Object.values(ward.history)
		data.push(cases[cases.length - 1]);
	}

    // Sorting the array of cases in descending order.
    for (var i = 0; i < labels.length - 1; i++) {
		for (var j = 0; j < labels.length - i - 1; j++) {
			if (data[j] < data[j + 1]) {
				var temp1 = data[j];
				var temp2 = labels[j];
				data[j] = data[j + 1];
				labels[j] = labels[j + 1];
				data[j + 1] = temp1;
				labels[j + 1] = temp2;
			}
		}
    }
  
    var ctx = document.getElementById("allWardCasesChart").getContext("2d");
  
    var allWardsCountChart = new Chart(ctx, {
		type: "horizontalBar",
		data: {
			labels: labels,
			datasets: [{
				label: lang.confirmedLabel,
				data: data,
				backgroundColor: "rgba(0, 123, 255, 0.5)",
				borderColor: "rgba(0, 123, 255, 1)",
				borderWidth: 1,
			}]
		},
		options: {
			plugins: {
				datalabels: {
					color: "black",
				},
			},
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
				xAxes: [
					{
					position: "top",
					},
				],
				yAxes: [{
					ticks: {
						fontSize: 12,
						beginAtZero: true,
					}
				}]
			},
		},
    });
  }
  
  export default plotAllWardsChart;