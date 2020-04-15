//  function to create chart for number of cases of all districts.
const createChart = () => {
  const url =
    "https://services6.arcgis.com/5jNaHNYe2AnnqRnS/arcgis/rest/services/COVID19_JapanData_Tokyo/FeatureServer/0/query?where=%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89%3E0&returnIdsOnly=false&returnCountOnly=false&f=pgeojson&outFields=*&orderByFields=%E5%85%AC%E8%A1%A8%E6%97%A5,%E8%87%AA%E6%B2%BB%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89";
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      // Converting response to json.
      return response.json();
    })
    .then(function (json) {
      var api_districts = json["features"];

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
        var cases = districtsData[i]["properties"]["件数"] || 0;
        backgroundColor.push("rgba(29, 90, 185, 0.5)");
        borderColor.push("rgba(29, 90, 185, 1)");
        labels.push(ward);
        data.push(cases);
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

      var myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of Cases 1",
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false
        },
          layout: {
            padding: 10,
          },
          scales: {
            xAxes: [
              { position: 'top' },
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
    });
};
createChart();
