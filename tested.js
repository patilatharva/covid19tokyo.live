$("#testsChartSelect").change(function () {
  var item = $(this);
  console.log(item.val());
  var data = JSON.parse(localStorage.getItem(item.val()));
  var labels = JSON.parse(localStorage.getItem("labels"));

  plotChart(labels, data);
});

const plotTestedChart = (data) => {
  var tokyoTestData = data["inspections_summary"]["data"]["都内"]; // "その他"
  var otherTestData = data["inspections_summary"]["data"]["その他"];
  var dischargeData = data["discharges_summary"]["data"];
  var casesData = data["patients_summary"]["data"];
  var deathData = Object.values(deathCount);
  var labels = data["inspections_summary"]["labels"];

  var totalTests = 0;

  // All data arrays
  var cumulativeTests = [];
  var testsPerDay = [];
  var casesPerDay = [];
  var recoveriesPerDay = [];
  var deathsPerDay = [];

  // Initializing all arrays
  for (var i = 0; i < tokyoTestData.length; i++) {
    var dayTests = 0;

    totalTests += tokyoTestData[i];
    dayTests += tokyoTestData[i];

    if (otherTestData[i]) {
      totalTests += otherTestData[i];
      dayTests += otherTestData[i];
    } else totalTests += 0;

    casesPerDay.push(casesData[i]["小計"]);
    deathsPerDay.push(deathData[i]);
    testsPerDay.push(dayTests);
    cumulativeTests.push(totalTests);
  }
  // setting items to local storage to prevent running this function multiple times
  localStorage.setItem("labels", JSON.stringify(labels));
  localStorage.setItem("testsPerDay", JSON.stringify(testsPerDay));
  localStorage.setItem("cumulativeTests", JSON.stringify(cumulativeTests));
  localStorage.setItem("casesPerDay", JSON.stringify(casesPerDay));
  localStorage.setItem("deathsPerDay", JSON.stringify(deathData));

  // Initially setting the plot to tests per day
  plotChart(labels, testsPerDay);
};
// Global variable to destroy previous instances of the chart
var testedChart;

// function called to actually plot the graph
const plotChart = (labels, dataset) => {
  var ctx = document.getElementById("totalTestedChart").getContext("2d");

  // destroy previous instance of chart to prevent glitching
  if (testedChart) testedChart.destroy();

  testedChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels.slice(labels.length - 60),
      datasets: [
        {
          label: "検査",
          data: dataset.slice(dataset.length - 60),
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
