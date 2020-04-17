function fillCards(data) {
  var lastUpdated = data["lastUpdate"];

  var confirmed = data["main_summary"]["children"][0]["value"];
  var confirmedNew =
    data["patients_summary"]["data"][
      data["patients_summary"]["data"].length - 1
    ]["小計"];

  var deaths = data["main_summary"]["children"][0]["children"][2]["value"];
  let deathNums = Object.values(deathCount);
  var deathsNew = deathNums[deathNums.length - 1];

  var critical =
    data["main_summary"]["children"][0]["children"][0]["children"][1]["value"];

  var discharged = data["main_summary"]["children"][0]["children"][1]["value"];

  var tested = data["inspection_status_summary"]["value"];
  var testedNew =
    data["inspection_persons"]["datasets"][0]["data"][
      data["inspection_persons"]["datasets"][0]["data"].length - 1
    ];

  var tests = data["inspection_status_summary"]["children"][0]["value"];

  var testData = data["inspections_summary"]["data"];
  var testsNew =
    testData["都内"][testData["都内"].length - 1] +
    testData["その他"][testData["その他"].length - 1];

  //var active = confirmed - discharged - deaths;

  document.getElementById("lastUpdated").innerHTML = lastUpdated;

  //document.getElementById("active").innerHTML = active;
  $("#deaths .h5").html(deaths);
  $("#deaths .new").html("(+" + deathsNew + ")");

  $("#critical .h5").html(critical);
  $("#critical .new").html("(+" + "num" + ")");

  $("#tested .h5").html(tested);
  $("#tested .new").html("(+" + testedNew + ")");

  $("#confirmed .h5").html(confirmed);
  $("#confirmed .new").html("(+" + confirmedNew + ")");

  $("#discharged .h5").html(discharged);
  $("#discharged .new").html("(+" + "num" + ")");

  $("#tests .h5").html(tests);
  $("#tests .new").html("(+" + testsNew + ")");

  /*
  document.getElementById("tested").innerHTML =
    tested + " (+" + testedNew + ")";
  document.getElementById("confirmed").innerHTML =
    confirmed + " (+" + confirmedNew + ")";
  document.getElementById("discharged").innerHTML = discharged;
  document.getElementById("tests").innerHTML = 
    tests + " (+" + testsNew + ")";
    */
}

function plotOverallChart(data) {
  // plot chart
  // patientData: array containing number of new cases each day; sample in temp.json -> patients_summary
  var patientData = data["patients_summary"]["data"];
  // dischargeData: array containing number of new discharges each day: sample in temp.json -> discharges_summary
  var dischargeData = data["discharges_summary"]["data"];

  var tokyoTestData = data["inspections_summary"]["data"]["都内"]; // "その他"
  var otherTestData = data["inspections_summary"]["data"]["その他"];

  var cases = []; // number of cases
  var discharges = []; // number of discharges
  var dates = []; // x axis (labels)
  var tests = [];
  var caseTotal = 0;
  var dischargeTotal = 0;
  var testsTotal = 0;

  for (var i = 0; i < patientData.length; i++) {
    caseTotal += patientData[i]["小計"];
    cases.push(caseTotal);

    dischargeTotal += dischargeData[i]["小計"];
    discharges.push(dischargeTotal);

    if (tokyoTestData[i]) {
      testsTotal += tokyoTestData[i];
      testsTotal += otherTestData[i];
    } else testsTotal += 0;
    tests.push(testsTotal);

    var date = patientData[i]["日付"].slice(5, 10);
    dates.push(date);
  }
  // console.log(cases);
  // console.log(dates);
  // console.log(discharges);
  // console.log(tests);
  // console.log(testsTotal);

  var ctx = document.getElementById("totalCasesChart").getContext("2d");

  // creating gradient to fill the background of the line chart.

  // var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, "rgba(29, 90, 185, 0.8)");
  // gradient.addColorStop(0.2, "rgba(29, 90, 185, 0.6)");
  // gradient.addColorStop(0.5, "rgba(29, 90, 185, 0.4)");
  // gradient.addColorStop(0.8, "rgba(29, 90, 185, 0.2)");
  // gradient.addColorStop(1, "rgba(29, 90, 185, 0.1)");

  // line chart of cases over time of ward that cursor hovers over on the map.
  var lineChart = new Chart(ctx, {
    type: "line",
    data: {
      // slice is used to include data from the last 60 days only.
      labels: dates.slice(dates.length - 60),
      datasets: [
        {
          label: "cases",
          data: cases.slice(cases.length - 60),
          borderColor: "red",
          fill: false,
        },
        {
          label: "discharged",
          data: discharges.slice(discharges.length - 60),
          borderColor: "blue",
          fill: false,
        },
        {
          label: "tested",
          data: tests.slice(discharges.length - 60),
          borderColor: "grey",
          fill: false,
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
      },
      legend: {
        display: true,
      },
      maintainAspectRatio: false,
      layout: {
        // backgroundColor: "blue",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
            },
          },
        ],
      },
    },
  });
}

const drawAgeGenderChart = (data) => {
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

  for (var i = 0; i < patients.length; i++) {
    var age = patients[i]["年代"];
    var gender = patients[i]["性別"];
    if (age.length == 6) {
      if (gender == "女性") females[10] += 1;
      else males[10] += 1;
    } else if (age.length == 5) {
      if (gender == "女性") females[0] += 1;
      else males[0] += 1;
    } else {
      var newAge = age.slice(0, 2);
      index = parseInt(newAge) / 10;
      if (gender == "女性") females[index] += 1;
      else males[index] += 1;
    }
  }

  var labels = []; // labels for the chart is the age groups

  for (var i = 1; i < 11; i++) {
    var range = i * 10 + "s";
    labels[i] = range;
  }
  labels[0] = "<10";
  labels[labels.length - 1] = "100+";
  // console.log(males);
  // console.log(females);
  // console.log(labels);
  var ctx = document.getElementById("ageGenderChart").getContext("2d");

  var stackedBar = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "male cases",
          data: males,
          borderColor: "rgba(0,100,255,1)",
          backgroundColor: "rgba(0,100,255,0.7)",
          borderWidth: 2,
        },
        {
          label: "female cases",
          data: females,
          borderColor: "rgba(232,0,255,1)",
          backgroundColor: "rgba(232,0,255,0.7)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            weight: "bold",
          },
          color: "black",
          align: "center",
        },
      },
      // elements: {
      //   line: {
      //     tension: 0,
      //   },
      // },
      legend: {
        display: true,
      },
      // maintainAspectRatio: false,
      // layout: {
      //   backgroundColor: "blue",
      // },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "age range",
              fontSize: 16,
            },
            stacked: true,
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "# of cases",
              fontSize: 16,
            },
            stacked: true,
            ticks: {
              suggestedMin: 0,
            },
          },
        ],
      },
    },
  });
};

function callback(status, response) {
  if (status) {
    alert(status);
  } else {
    fillCards(response);
    // plotOverallChart(response["patients_summary"]);
    plotOverallChart(response);

    drawAgeGenderChart(response["patients"]);
    data = response;
  }
}

var getJSON = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

var data = {};
let url =
  "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json";
getJSON(url);
