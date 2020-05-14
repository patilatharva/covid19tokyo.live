export {parseCoronaData, fillCards};

function parseCoronaData(data) {
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
