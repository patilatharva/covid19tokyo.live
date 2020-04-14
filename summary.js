let url = 'https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json';

function fillCards(data) {
    var confirmed = data['main_summary']['value'];
    var deaths = data['main_summary']['children'][0]['children'][2]['value'];
    var critical = data['main_summary']['children'][0]['children'][0]['children'][1]['value'];
    var discharged = data['main_summary']['children'][0]['children'][1]['value'];
    var tested = data['inspection_status_summary']['value'];
    var active = confirmed - discharged - deaths;

    document.getElementById('active').innerHTML = active;
    document.getElementById('deaths').innerHTML = deaths;
    document.getElementById('critical').innerHTML = critical;
    document.getElementById('tested').innerHTML = tested;
    document.getElementById('confirmed').innerHTML = confirmed;
    document.getElementById('discharged').innerHTML = discharged;

}

function callback(status, response) {
    if (status) {
        alert(status);
    } else {
        fillCards(response);
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
getJSON(url);
