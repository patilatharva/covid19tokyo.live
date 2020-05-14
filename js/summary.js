export {parseData, fillCards};

function parseData(data) {
  var lastUpdatedDate = new Date(data["lastUpdate"]);
  var today = new Date();
  var minutesSinceUpdate = Math.round((today - lastUpdatedDate) / (60 * 1000));

  var lastUpdated = "";
  if (minutesSinceUpdate < 60) {
    if (lang == ja) {
      lastUpdated = "約" + minutesSinceUpdate + "分前";
    } else {
      lastUpdated = "around " + minutesSinceUpdate + " minutes ago";
    }
  } else {
    if (lang == ja) {
      lastUpdated = "約" + Math.round(minutesSinceUpdate/60) + "時間前";
    } else {
      lastUpdated = "around " + Math.round(minutesSinceUpdate/60) + " hours ago";
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

  var result = {
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
  //myCharts.ageGender = ageGenderChart;
};

