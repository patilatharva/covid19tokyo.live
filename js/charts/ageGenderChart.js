export const plotAgeGenderChart = (data) => {
    const patients = data["data"];
  
    var males = []; // stores number of male patients
    var females = []; // stores number of female patients
  
    // initally setting the male and female counts to 0.
    for (var i = 0; i < 11; i++) {
        males[i] = 0;
        females[i] = 0;
    }
  
    // Age ranges: 0-10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-90, 90-100
    // data is 10, it means patient is in his 10s
    // corrposond each age range to an index, 0s -> 0, 10 -> 1, 20 -> 2, 100s -> 10, etc.
  
    // 10歳未満 -> under 10
    // 100歳以上 -> over 100
  
    // console.log(patients);
  
    for (var i = 0; i < patients.length; i++) {
        var age = patients[i]["年代"];
        if (!age) {
            continue
        };

        var gender = patients[i]["性別"];
        if (age.length == 6) {
            if (gender == "女性") {
                females[10] += 1;
            } else {
                males[10] += 1;
            }
        } else if (age.length == 5) {
            if (gender == "女性") {
                females[0] += 1;
            } else {
                males[0] += 1;
            }
        } else {
            var newAge = age;
            if (typeof age === "string") {
                newAge = parseInt(age.slice(0, 2));
            }
            var index = newAge / 10;
            if (gender == "女性") {
                females[index] += 1;
            } else {
                males[index] += 1;
            }
        }
    }
  
	var labels = []; // labels for the chart is the age groups

    for (var i = 1; i <= 10; i++) {
        var range = i * 10 + lang.agePostfix;
        labels[i] = range;
    }
    labels[0] = "<10";
	labels[labels.length - 1] = "100+";
	
	
    var ctx = document.getElementById("ageGenderChart").getContext("2d");
  
    var ageGenderChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: labels,
			datasets: [{
				label: lang.male,
				data: males,
				borderColor: "rgba(0, 123, 255, 1)",
				backgroundColor: "rgba(0, 123, 255, 0.5)",
				borderWidth: 1,
			}, {
				label: lang.female,
				data: females,
				borderColor: "rgba(255, 7, 58, 1)",
				backgroundColor: "rgba(255, 7, 58, 0.5)",
				borderWidth: 1,	
			}]
		},
		options: {
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					color: "black",
					align: "center",
				}
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
				display: true,
			},
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true,
					ticks: {
						suggestedMin: 0,
					}
				}]
			},
		},
    });
};