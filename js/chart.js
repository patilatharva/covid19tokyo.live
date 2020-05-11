// charts created
var myCharts = {};

//  function to create chart for number of cases of all districts.
const allWardsChart = () => {
  // const url =
  //   "https://services6.arcgis.com/5jNaHNYe2AnnqRnS/arcgis/rest/services/COVID19_JapanData_Tokyo/FeatureServer/0/query?where=%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89%3E0&returnIdsOnly=false&returnCountOnly=false&f=pgeojson&outFields=*&orderByFields=%E5%85%AC%E8%A1%A8%E6%97%A5,%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89";
  // fetch(url, {
  //   method: "GET",
  // })
  //   .then(function (response) {
  //     // Converting response to json.
  //     return response.json();
  //   })
  //   .then(function (json) {
  var api_districts = cases["features"];
  // Obtains data for the current date.
  var districtsData = api_districts.slice(api_districts.length - 62);

  // Declaring arrays to use in the chart.
  var labels = [];
  var data = [];
  var backgroundColor = [];
  var borderColor = [];

  // Setting the labels and the data of the chart.
  for (var i = 0; i < districtsData.length; i++) {
    var ward = districtsData[i]["properties"]["団体名"];
    if (lang == en_us) {
      ward = toEnglish(ward);
      ward = ward.replace(' ', '-');
    }
    //ward = ward.split(" ")[0];
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
      datasets: [
        {
          label: lang.confirmedLabel,
          data: data,
          backgroundColor: "rgba(0, 123, 255, 0.5)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1,
        },
      ],
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
        yAxes: [
          {
            ticks: {
              fontSize: 12,
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  myCharts.allWards = allWardsCountChart;
};
allWardsChart();

// function to create chart of selected ward from map/drop down
const drawWardChart = (currentWard) => {
  var history = getHistory(currentWard);
  var keys = Object.keys(history.history);

  keys = keys.map((timestamp) => {
    timestamp; // -= 24*60*60*1000;
    var date = new Date(parseInt(timestamp));
    var month = date.getMonth();
    var day = date.getDate();
    return month + 1 + "/" + day;
  });

  var values = Object.values(history.history);
  var ctx = document.getElementById("wardHistoryChart").getContext("2d");

  // line chart of cases over time of ward that cursor hovers over on the map.
  // if previous chart exists, destroy it
  if (stackedLine) stackedLine.destroy();

  stackedLine = new Chart(
    ctx,
    wardChartSettings(ctx, currentWard, keys, values)
  );

  myCharts.wardHistory = stackedLine;
};

function wardChartSettings(ctx, currentWard, keys, values) {
  if (lang == en_us) {
    var chartTitle =
      "Confirmed cases in " + currentWard.properties[lang.wardLang];
  } else {
    var chartTitle = currentWard.properties[lang.wardLang] + "の感染者数";
  }

  return {
    type: "line",
    data: {
      labels: keys,
      datasets: [
        {
          data: values,
          borderColor: "rgba(0, 123, 255, 0.8)",
          backgroundColor: blueGradient(ctx),
        },
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
          labels: {
            title: {
              color: "black",
              align: 260, // slight top-left; 3 dig values arent cropped out
              offset: 3,
              display: (context) => {
                return (values.length - context.dataIndex) % 2;
              },
              opacity: (context) => {
                return context.dataIndex == values.length - 1? 1: 0.5;
              },
            },
          },
        },
      },
      title: {
        display: true,
        text: chartTitle, //currentWard.properties[lang.wardChartLang], //
        fontColor: "#007bff",
      },
      elements: {
        line: {
          tension: 0,
        },
        point: {
          radius: 2,
          backgroundColor: "rgba(0, 123, 255, 0.8)",
        },
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      layout: {
        backgroundColor: "blue",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              suggestedMax: casesMaxValue,
            },
          },
        ],
      },
    },
  };
}
