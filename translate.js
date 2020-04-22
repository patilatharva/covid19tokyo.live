var en_us = {
    'title': 'Tokyo COVID-19 Tracker',
    'lastUpdatedLabel': 'Last Updated',
    'summary': 'Summary',
    'activeLabel': 'Active',
    'confirmedLabel': 'Confirmed',
    'recoveredLabel': 'Recovered',
    'deathsLabel': 'Deaths',
    'testedLabel': 'Tested',
    'testsLabel': 'Tests',
    'latestTrends': 'Latest Trends',
    'outbreakMapLabel': 'Outbreak Map',
    'selectLabel': 'Select a district',
    'search': 'Search',
    'ageGenderLabel': 'By Age and Gender',
    'confirmedByWard': 'Confirmed Cases by Ward',
    'newsLabel': 'News',
    'aboutLabel': 'This website was created by three college students to better visualize and understand the trends of the COVID-19 outbreak in Tokyo, Japan.',
    'fukushiUpdates': 'Updates from the Bureau of Social Welfare and Public Health, Tokyo Metro. Govt.',
    'openData': 'Tokyo Metro. Gov. Open Data'
};

var ja = {
    'title': '東京都<span style="display: inline-block;">新型コロナウイルス</span><span style="display: inline-block;">感染状況</span>',
    'lastUpdatedLabel': '最終更新',
    'summary': '現在の状況',
    'activeLabel': '現在患者数',
    'confirmedLabel': '感染者',
    'recoveredLabel': '回復者',
    'deathsLabel': '死亡者',
    'testedLabel': '検査実施人数',
    'testsLabel': '検査実施件数',
    'latestTrends': '最新感染動向',
    'outbreakMapLabel': '感染者数マップ',
    'selectLabel': '区市町村を選択して下さい',
    'search': '区市町村を探す',
    'ageGenderLabel': '年齢・男女別',
    'confirmedByWard': '各区市町村の感染者数',
    'newsLabel': '最新のニュース',
    'aboutLabel': 'このサイトは東京都内の新型コロナウイルス(COVID-19)の最新感染状況が一目で分かるように開発されたダッシュボードです。',
    'fukushiUpdates': '東京都福祉保健局報道発表',
    'openData': '東京都福祉保健局オープンデータ'
}

function translate(lang) {
    let idList = Object.keys(lang);
    for (var id of idList) {
        $('#' + id).html(lang[id]);
    }

    //overallChart.data.datasets.forEach
}