export const getNews = () => {
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

        var date = data[0]["date"] + "&emsp;";
        $(".newsDate").html(date);

        var newsItem = $("<a/>");
        newsItem.attr("href", data[0]["url"]);
        newsItem.attr("target", "_blank");
        var text = data[0]["text"];
        newsItem.text(text);
        $("#newsItem1").append(newsItem);

        var newsItem = $("<a/>");
        newsItem.attr("href", data[1]["url"]);
        var text = data[1]["text"];
        newsItem.text(text);
        $("#newsItem2").append(newsItem);

        var newsItem = $("<a/>");
        newsItem.attr("href", data[2]["url"]);
        var text = data[2]["text"];
        newsItem.text(text);
        $("#newsItem3").append(newsItem);
    });
};