export {getTodayData, fillSummaryCard};

/**
 * return an object with latest (current day's) covid-19 stats. 
 * 
 * @param {object} data		covid-19 data from Tokyo govt 
 */
const getTodayData = (data) => {
	// utility function to sum array values
	const sum = (list) => {
		var total = 0
		for (const num of list) {
			total += num
		}
		return total
	}
	
	const summary = data.summary;
	const deathCount = data.deaths;
	const dischargedCount = data.discharged;

	const lastUpdatedDate = new Date(summary["lastUpdate"]);
	const today = new Date();
	const minutesSinceUpdate = Math.round((today - lastUpdatedDate) / (60 * 1000));

	var lastUpdated;
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

	const confirmed = summary["main_summary"]["children"][0]["value"];
	const confirmedNew =
		summary["patients_summary"]["data"][
			summary["patients_summary"]["data"].length - 1]["小計"];

	const deaths = Math.min(
		summary["main_summary"]["children"][0]["children"][2]["value"],
		summary["main_summary"]["children"][0]["children"][1]["value"]
	);
	const deathsByDate = Object.values(deathCount);
	const deathsNew = deathsByDate[deathsByDate.length - 1] - deathsByDate[deathsByDate.length - 2]

	const critical =
		summary["main_summary"]["children"][0]["children"][0]["children"][1]["value"];

	const dis = Object.values(dischargedCount);
	const discharged = dis[dis.length - 1];
	const dischargedNew = discharged - dis[dis.length - 2];

	const recovered = discharged - deaths;
	const recoveredNew = discharged - dis[dis.length - 2] - deathsNew;

	const active = confirmed - discharged - deaths;
	const activeNew = confirmedNew - dischargedNew - deathsNew;

	/*
	const tested = summary["inspection_status_summary"]["value"];
	const testedNew =
		summary["inspection_persons"]["datasets"][0]["data"][
		summary["inspection_persons"]["datasets"][0]["data"].length - 1
		];

	const tests = summary["inspection_status_summary"]["children"][0]["value"];

	const testData = summary["inspections_summary"]["data"];
	const testsNew =
		testData["都内"][testData["都内"].length - 1] +
		testData["その他"][testData["その他"].length - 1];
	*/

	const testData = summary["inspections_summary"]["data"]
	const tests = sum(testData["都内"]) + sum(testData["保険適用分"])
	const testsNew = testData["都内"][testData["都内"].length-1] + testData["保険適用分"][testData["保険適用分"].length-1]


	const result = {
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
		tested: 0,
		testedNew: 0,
		tests: tests,
		testsNew: testsNew,
	};

	return result;
}

/**
 * populate Summary card with latest numbers.
 * 
 * @param {object} summary 	summary object from getTodayData()
 */
const fillSummaryCard = (summary) => {
	const sign = (newCases) => (newCases >= 0 ? "+" : "");

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

	$("#tested .h5").html(summary.tested);
	$("#tested .new").html(
		"(" + sign(summary.testedNew) + summary.testedNew + ") <sup>*1</sup>"
	);

	$("#tests .h5").html(summary.tests);
	$("#tests .new").html(
		"(" + sign(summary.testsNew) + summary.testsNew + ") <sup>*2</sup>"
	);
}
