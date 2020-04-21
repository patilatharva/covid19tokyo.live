const plotTestedChart = (data) => {
  var tokyoTestData = data["inspections_summary"]["data"]["都内"]; // "その他"
  var otherTestData = data["inspections_summary"]["data"]["その他"];
  var labels = data["inspections_summary"]["labels"];

  //   console.log(tokyoTestData);
  //   console.log(otherTestData);
  //   console.log(labels);
  var totalTests = 0;
  var tests = [];

  for (var i = 0; i < tokyoTestData.length; i++) {
    totalTests += tokyoTestData[i];
    if (otherTestData[i]) totalTests += otherTestData[i];
    else totalTests += 0;
    tests.push(totalTests);
  }

  var ctx = document.getElementById("totalTestedChart").getContext("2d");

  var testedChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels.slice(labels.length - 60),
      datasets: [
        {
          label: "検査",
          data: tests.slice(tests.length - 60),
          backgroundColor: "rgba(0, 123, 255, 0.5)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1,
        },
      ],
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
};
