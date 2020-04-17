function casesCallback(status, response) {
  if (status) {
    alert(status);
  } else {
    console.log(response);
  }
}

var getCases = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      casesCallback(null, xhr.response);
    } else {
      casesCallback(status, xhr.response);
    }
  };
  xhr.send();
};

let newsUrl =
  "https://github.com/tokyo-metropolitan-gov/covid19/blob/development/data/news.json";

getCases(newsUrl);

// const getNews = () => {
//   const url =
//     "https://github.com/tokyo-metropolitan-gov/covid19/blob/development/data/news.json";
//   fetch(url, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       console.log(json);
//     });
// };
// getNews();
