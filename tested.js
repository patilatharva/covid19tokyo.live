const plotTestedChart = (data) => {
  var tokyoTestData = data["inspections_summary"]["data"]["都内"]; // "その他"
  var otherTestData = data["inspections_summary"]["data"]["その他"];
  var dischargeData = data["discharges_summary"]["data"];
  var casesData = data["patients_summary"]["data"];
  var deathData = Object.values(deathCount);
  var labels = data["inspections_summary"]["labels"];

  console.log(dischargeData);
  console.log(tokyoTestData);
  console.log(otherTestData);
  console.log(casesData);
  console.log(deathData);
  console.log(labels);
  // Testing data
  var totalTests = 0;

  // All data
  var cumulativeTests = [];
  var testsPerDay = [];
  var casesPerDay = [];

  var recoveriesPerDay = [];
  var deathsPerDay = [];

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
  console.log(casesPerDay);
  console.log(deathsPerDay);
  console.log(testsPerDay);
  console.log(cumulativeTests);

  var dataset = testsPerDay;

  var ctx = document.getElementById("totalTestedChart").getContext("2d");

  var testedChart = new Chart(ctx, {
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
