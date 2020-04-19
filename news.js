const getNews = () => {
  const url =
    "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/development/data/news.json";
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      var data = json["newsItems"];
      console.log(data);
    });
};
getNews();
