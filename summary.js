function fillCards(data) {
    var lastUpdated = data['lastUpdate'];
    
    var confirmed = data['main_summary']['children'][0]['value'];
    var confirmedNew = data['patients_summary']['data'][data['patients_summary']['data'].length - 1]['小計'];

    var deaths = data['main_summary']['children'][0]['children'][2]['value'];

    var critical = data['main_summary']['children'][0]['children'][0]['children'][1]['value'];

    var discharged = data['main_summary']['children'][0]['children'][1]['value'];

    var tested = data['inspection_status_summary']['value'];
    var testedNew = data['inspection_persons']['datasets'][0]['data'][data['inspection_persons']['datasets'][0]['data'].length - 1];

    var active = confirmed - discharged - deaths;

    document.getElementById('lastUpdated').innerHTML = lastUpdated;
    document.getElementById('active').innerHTML = active;
    document.getElementById('deaths').innerHTML = deaths;
    document.getElementById('critical').innerHTML = critical;
    document.getElementById('tested').innerHTML = tested + ' (+' + testedNew + ')';
    document.getElementById('confirmed').innerHTML = confirmed + ' (+' + confirmedNew + ')';
    document.getElementById('discharged').innerHTML = discharged;

}

function plotOverallChart(data) {
  // plot chart
  // data: array containing number of new cases each day; sample in temp.json -> patients_summary
}

function callback(status, response) {
    if (status) {
        alert(status);
    } else {
        fillCards(response);
        plotOverallChart(response['patients_summary']);
        data = response;
    }
}

var getJSON = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
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
let url = 'https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json';
getJSON(url);
