const plotAllWardsChart = (casesByWard) => {
    var api_districts = casesByWard["features"];
    // Obtains data for the current date.
    var districtsData = api_districts.slice(api_districts.length - 62);
  
    // Declaring arrays to use in the chart.
    var labels = [];
    var data = [];
    var backgroundColor = [];
    var borderColor = [];
  
    // Setting the labels and the data of the chart.
    for (var i = 0; i < districtsData.length; i++) {
		var ward;
		if (lang == en_us) {
			ward = districtsData[i]["properties"]["ward"];
			ward = ward.replace(' ', '-');
		} else {
			ward = districtsData[i]["properties"]["団体名"];
		}

		var num = districtsData[i]["properties"]["件数"] || 0;
		backgroundColor.push("rgba(29, 90, 185, 0.5)");
		borderColor.push("rgba(29, 90, 185, 1)");
		labels.push(ward);
		data.push(num);
    }
  
    // Sorting the array of cases in descending order.
    for (var i = 0; i < districtsData.length - 1; i++) {
		for (var j = 0; j < districtsData.length - i - 1; j++) {
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