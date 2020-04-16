function fillCards(data) {
  var lastUpdated = data["lastUpdate"];

  var confirmed = data["main_summary"]["children"][0]["value"];
  var confirmedNew =
    data["patients_summary"]["data"][
      data["patients_summary"]["data"].length - 1
    ]["小計"];

  var deaths = data["main_summary"]["children"][0]["children"][2]["value"];

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
  var testsNew = testData["都内"][testData["都内"].length - 1] + testData["その他"][testData["その他"].length - 1];

  //var active = confirmed - discharged - deaths;

  document.getElementById("lastUpdated").innerHTML = lastUpdated;
  
  //document.getElementById("active").innerHTML = active;
  $("#deaths .h5").html(deaths);
  $("#critical .h5").html(critical);
  $("#tested .h5").html(tested);
  $("#tested .new").html("(+" + testedNew + ")");

  $("#deaths .h5").html(deaths);
  $("#confirmed .h5").html(confirmed);
  $("#confirmed .new").html("(+" + confirmedNew + ")");

  $("#discharged .h5").html(discharged);
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
  // data: array containing number of new cases each day; sample in temp.json -> patients_summary
  var patientData = data["data"];
  console.log(patientData[0]);
  var cases = []; // x axis
  var dates = []; // y axis (labels)
  var total = 0;
  for (var i = 0; i < patientData.length; i++) {
    total += patientData[i]["小計"];
    cases.push(total);
    var date = patientData[i]["日付"].slice(5, 10);
    dates.push(date);
  }
  console.log(cases);
  console.log(dates);

  var ctx = document.getElementById("totalCasesChart").getContext("2d");

  // creating gradient to fill the background of the line chart.
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(29, 90, 185, 0.8)");
  gradient.addColorStop(0.2, "rgba(29, 90, 185, 0.6)");
  gradient.addColorStop(0.5, "rgba(29, 90, 185, 0.4)");
  gradient.addColorStop(0.8, "rgba(29, 90, 185, 0.2)");
  gradient.addColorStop(1, "rgba(29, 90, 185, 0.1)");

  // line chart of cases over time of ward that cursor hovers over on the map.
  var lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: cases,
          borderColor: "rgba(29, 90, 185, 1)",
          backgroundColor: gradient,
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            // disabling labels as chart becomes too cluttered.
            size: 0,
          },
          color: "blue",
          align: "top",
          offset: 3,
        },
      },
      title: {
        display: true,
        text: "Confirmed Cases Over Time",
      },
      elements: {
        line: {
          tension: 0,
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
            },
          },
        ],
      },
    },
  });
}

function callback(status, response) {
  if (status) {
    alert(status);
  } else {
    fillCards(response);
    plotOverallChart(response["patients_summary"]);
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
