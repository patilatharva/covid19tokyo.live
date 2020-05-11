function parseData(data) {
  var lastUpdatedDate = new Date(data["lastUpdate"]);
  var today = new Date();
  var minutesSinceUpdate = Math.round((today - lastUpdatedDate) / (60 * 1000));

  var lastUpdated = "";
  if (minutesSinceUpdate < 60) {
    if (lang == ja) {
      lastUpdated = "約" + minutesSinceUpdate + "分前";
    } else {
      lastUpdated = "approx. " + minutesSinceUpdate + " minutes ago";
    }
  } else {
    if (lang == ja) {
      lastUpdated = "約" + Math.round(minutesSinceUpdate/60) + "時間前";
    } else {
      lastUpdated = "approx. " + Math.round(minutesSinceUpdate/60) + " hours ago";
    }
  }

  var confirmed = data["main_summary"]["children"][0]["value"];
  var confirmedNew =
    data["patients_summary"]["data"][
      data["patients_summary"]["data"].length - 1
    ]["小計"];

  var deaths = Math.min(
    data["main_summary"]["children"][0]["children"][2]["value"],
    data["main_summary"]["children"][0]["children"][1]["value"]
  );
  let deathsByDate = Object.values(deathCount);
  var deathsNew = deathsByDate[deathsByDate.length - 1];

  var critical =
    data["main_summary"]["children"][0]["children"][0]["children"][1]["value"];

  //var discharged = data["main_summary"]["children"][0]["children"][1]["value"];
  const dis = Object.values(dischargedCount);
  var discharged = dis[dis.length - 1];
  var dischargedNew = discharged - dis[dis.length - 2];

  var recovered = 0;
  var recoveredNew = 0;

  recovered = discharged - deaths;
  recoveredNew = discharged - dis[dis.length - 2] - deathsNew;

  /*
  var today = new Date(lastUpdated);
  today =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

  for (patient of data["patients"]["data"]) {
    if (patient["退院"]) {
      var date = new Date(patient["リリース日"]);
      var releasedDate =
        date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
      if (releasedDate === today) {
        recoveredNew++;
      }
      recovered++;
    }
  }
  */

  var active = confirmed - discharged - deaths;
  var activeNew = confirmedNew - dischargedNew - deathsNew;

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

  result = {
    lastUpdated: lastUpdated,
    confirmed: confirmed,
    confirmedNew: confirmedNew,
    active: active,
    activeNew: activeNew,
    deaths: deaths,
    deathsNew: deathsNew,
    critical: critical,
    discharged: discharged,
    dischargedNew: dischargedNew,
    recovered: recovered,
    recoveredNew: recoveredNew,
    tested: tested,
    testedNew: testedNew,
    tests: tests,
    testsNew: testsNew,
  };

  return result;
}

function fillCards(summary) {
  //var active = confirmed - discharged - deaths;

  let sign = (newCases) => (newCases >= 0 ? "+" : "");

  $("#lastUpdated").html(summary.lastUpdated);

  $("#confirmed .h5").html(summary.confirmed);
  $("#confirmed .new").html(
    "(" + sign(summary.confirmedNew) + summary.confirmedNew + ")"
  );

  $("#active .h5").html(summary.active);
  $("#active .new").html(
    "(" + sign(summary.activeNew) + summary.activeNew + ")"
  );

  $("#recovered .h5").html(summary.discharged);
  $("#recovered .new").html(
    "(" + sign(summary.dischargedNew) + summary.dischargedNew + ")"
  );

  $("#deaths .h5").html(summary.deaths);
  $("#deaths .new").html(
    "(" + sign(summary.deathsNew) + summary.deathsNew + ")"
  );

  //$("#critical .h5").html(summary.critical);
  //$("#critical .new").html("(+" + "num" + ")");

  $("#tested .h5").html(summary.tested);
  $("#tested .new").html(
    "(" + sign(summary.testedNew) + summary.testedNew + ") <sup>*1</sup>"
  );

  $("#tests .h5").html(summary.tests);
  $("#tests .new").html(
    "(" + sign(summary.testsNew) + summary.testsNew + ") <sup>*2</sup>"
  );
}

function plotOverallChart(data) {
  // plot chart
  // patientData: array containing number of new cases each day; sample in temp.json -> patients_summary
  var patientData = data["patients_summary"]["data"];
  // dischargeData: array containing number of new discharges each day: sample in temp.json -> discharges_summary
  // var dischargeData = data["discharges_summary"]["data"];
  var dischargedData = Object.values(dischargedCount);
  var cases = []; // number of cases
  var recovered = []; // number of discharges
  var dates = []; // x axis (labels)
  var tests = [];
  var deaths = [];
  var active = [];

  let deathData = Object.values(deathCount);
  var caseTotal = 0;
  var recoveredTotal = 0;
  var deathsTotal = 0;

  for (var i = 0; i < patientData.length; i++) {
    caseTotal += patientData[i]["小計"];
    cases.push(caseTotal);

    deathsTotal += deathData[i];
    deaths.push(deathsTotal);

    if (dischargedData[i]) {
      var recov = dischargedData[i]; // - deathsTotal;
      recovered.push(recov);
      active.push(caseTotal - recov - deathsTotal);
    } else {
      recovered.push(null);
      active.push(null);
    }

    /*
    if (dischargeData[i]) recoveredTotal += dischargeData[i]["小計"] - deathData[i];
    else recoveredTotal += 0;
    recovered.push(recoveredTotal);

    active.push(caseTotal - deathsTotal - recoveredTotal);
    */

    var date = new Date(patientData[i]["日付"]);
    dates.push(date.getMonth() + 1 + "/" + date.getDate());
  }

  dates = dates.slice(dates.length - 60);
  var ctx = document.getElementById("totalCasesChart").getContext("2d");

  // line chart of cases over time of ward that cursor hovers over on the map.
  var overallChart = new Chart(ctx, {
    type: "line",
    data: {
      // slice is used to include data from the last 60 days only.
      labels: dates,
      datasets: [
        {
          label: lang.confirmedLabel,
          data: cases.slice(cases.length - 60),
          borderColor: "rgba(255, 7, 57, 0.8)",
          fill: false,
        },

        {
          label: lang.activeLabel,
          data: active.slice(active.length - 60),
          borderColor: "rgba(0, 123, 255, 0.8)",
          fill: false,
        },

        {
          label: lang.recoveredLabel,
          data: recovered.slice(recovered.length - 60),
          borderColor: "rgba(40, 167, 69, 0.8)",
          fill: false,
        },

        {
          label: lang.deathsLabel,
          data: deaths.slice(deaths.length - 60),
          borderColor: "rgba(108, 117, 125, 0.8)",
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
        point: {
          radius: 2,
          backgroundColor: (context) => {
            return context.dataset.borderColor;
          },
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
  myCharts.overall = overallChart;
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

  // console.log(patients);

  for (var i = 0; i < patients.length; i++) {
    var age = patients[i]["年代"];
    if (!age) continue;

    var gender = patients[i]["性別"];
    if (age.length == 6) {
      if (gender == "女性") females[10] += 1;
      else males[10] += 1;
    } else if (age.length == 5) {
      if (gender == "女性") females[0] += 1;
      else males[0] += 1;
    } else {
      var newAge = age;
      if (typeof age === "string") {
        newAge = parseInt(age.slice(0, 2));
      }
      index = newAge / 10;
      if (gender == "女性") females[index] += 1;
      else males[index] += 1;
    }
  }

  var labels = getAgeGroups(lang.agePostfix);

  var ctx = document.getElementById("ageGenderChart").getContext("2d");

  var ageGenderChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: lang.male,
          data: males,
          borderColor: "rgba(0, 123, 255, 1)",
          backgroundColor: "rgba(0, 123, 255, 0.5)",
          borderWidth: 1,
        },
        {
          label: lang.female,
          data: females,
          borderColor: "rgba(255, 7, 58, 1)",
          backgroundColor: "rgba(255, 7, 58, 0.5)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          font: {
            // weight: "bold",
          },
          color: "black",
          align: "center",
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
            // scaleLabel: {
            //   display: true,
            //   labelString: "age range",
            //   fontSize: 16,
            // },
            stacked: true,
          },
        ],
        yAxes: [
          {
            // scaleLabel: {
            //   display: true,
            //   labelString: "# of cases",
            //   fontSize: 16,
            // },
            stacked: true,
            ticks: {
              suggestedMin: 0,
            },
          },
        ],
      },
    },
  });
  myCharts.ageGender = ageGenderChart;
};

function callback(status, response) {
  if (status) {
    alert(status);
  } else {
    data = response;
    plotOverallChart(response);

    data = parseData(response);
    fillCards(data);
    // plotOverallChart(response["patients_summary"]);
    drawAgeGenderChart(response["patients"]);
    plotDailyChart(response);
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
