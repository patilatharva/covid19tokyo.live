var en_us = {
    'title': 'Tokyo COVID-19 Tracker',
    'lastUpdatedLabel': 'Last Updated:',
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
    'searchWard': 'Search',
    'ageGenderLabel': 'By Age and Gender',
    'confirmedByWard': 'Confirmed Cases by Ward',
    'newsLabel': 'News',
    'aboutLabel': 'This website was created by three college students to better visualize and understand the trends of the COVID-19 outbreak in Tokyo, Japan.',
    'dataSources': 'Data Sources',
    'fukushiUpdates': 'Press releases - Bureau of Social Welfare and Public Health, Tokyo Metro. Govt.',
    'openData': 'Tokyo Metro. Gov. Open Data',
    'male': 'Male',
    'female': 'Female',
    'wardChartLang': 'chart_en',
    'wardNameTranslator': toEnglish,
    'agePostfix': 's',
    'dailyNums': 'Daily Numbers',
    'mapLabels': 'label_en',
    'wardLang': 'ward_en',
    'staySafe': 'Stay safe and informed with real-time analytics from <b>covid19tokyo.live</b>.',
    'dailyCases': 'New cases per day',
    'dailyDeaths': 'New deaths per day',
    'dailyTests': 'New tests per day'
};

var ja = {
    'title': '東京都<span style="display: inline-block;">新型コロナウイルス</span><span style="display: inline-block;">感染状況</span>',
    'lastUpdatedLabel': '最終更新',
    'summary': '現在の状況',
    'activeLabel': '現在患者数',
    'confirmedLabel': '感染者数',
    'recoveredLabel': '回復者数',
    'deathsLabel': '死亡者数',
    'testedLabel': '検査実施人数',
    'testsLabel': '検査実施件数',
    'latestTrends': '最新感染動向',
    'outbreakMapLabel': '感染者数マップ',
    'selectLabel': '区市町村を選択して下さい',
    'searchWard': '区市町村を探す',
    'ageGenderLabel': '年齢・男女別',
    'confirmedByWard': '各区市町村の感染者数',
    'newsLabel': '最新のニュース',
    'aboutLabel': 'このサイトは東京都内の新型コロナウイルス(COVID-19)の最新感染状況が一目で分かるように開発されたダッシュボードです。',
    'dataSources': 'データ出典',
    'fukushiUpdates': '東京都福祉保健局報道発表',
    'openData': '東京都福祉保健局オープンデータ',
    'male': '男性',
    'female': '女性',
    'wardChartLang': 'chart_ja',
    'wardNameTranslator': toJapanese,
    'agePostfix': '代',
    'dailyNums': '日別',
    'mapLabels': 'label_ja',
    'wardLang': 'ward_ja',
    'staySafe': '<b>covid19tokyo.live</b>を使って都内の最新情報を入手。',
    'dailyCases': '新規感染者数',
    'dailyDeaths': '新規死亡者数',
    'dailyTests': '新規検査件数'
};

/*
function translate(newLang) {
    lang = newLang;

    let idList = Object.keys(lang);
    for (var id of idList) {
        $('#' + id).html(lang[id]);
    }

    myCharts.ageGender.data.datasets[0].label = lang.male;
    myCharts.ageGender.data.datasets[1].label = lang.female;
    myCharts.ageGender.data.labels = getAgeGroups(lang.agePostfix);
    myCharts.ageGender.update();

    myCharts.overall.data.datasets[0].label = lang.confirmedLabel;
    myCharts.overall.data.datasets[1].label = lang.activeLabel;
    myCharts.overall.data.datasets[2].label = lang.recoveredLabel;
    myCharts.overall.data.datasets[3].label = lang.deathsLabel;
    myCharts.overall.update();

    myCharts.allWards.data.datasets[0].label = lang.confirmedLabel;
    
    myCharts.allWards.data.labels = myCharts.allWards.data.labels.map(label =>lang.wardNameTranslator(label));
    myCharts.allWards.update();

    $("#dailyChartSelect").change();

    map.removeLayer('casesLabels');
    map.addLayer({
        id: 'casesLabels',
        type: 'symbol',
        source: 'labels',
        layout: {
          'text-field': ['get', lang.mapLabels],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0,
          'text-justify': 'center',
          'text-size': 10,
        },
        paint: {
          'text-halo-color': 'white',
          'text-halo-width': 1.2,
          'text-halo-blur': 0,
        },
      });

      $('#ward-picker').empty();
      initializeOptions('#ward-picker', tokyo, lang.wardLang)

      $('#ward-picker').selectpicker({
        title: lang.searchWard
      }).selectpicker('refresh');
}
*/

$('#en_us').click(function(){
  window.location.href='./en/index.html'
});

$('#ja').click(function(){
  window.location.href='../index.html'
});