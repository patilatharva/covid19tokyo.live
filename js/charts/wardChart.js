export {drawWardChart};


var stackedLine;

const drawWardChart = (currentWard, history) => {
    var keys = Object.keys(history.history);
  
    keys = keys.map((timestamp) => {
      timestamp; // -= 24*60*60*1000;
      var date = new Date(parseInt(timestamp));
      var month = date.getMonth();
      var day = date.getDate();
      return month + 1 + "/" + day;
    });
  
    var values = Object.values(history.history);
    const casesMaxValue = 500;
    var ctx = document.getElementById("wardHistoryChart").getContext("2d");
  
    // line chart of cases over time of ward that cursor hovers over on the map.
    // if previous chart exists, destroy it
    if (stackedLine) stackedLine.destroy();

    if (lang == en_us) {
        var chartTitle =
          "Confirmed cases in " + currentWard.properties[lang.wardLang];
    } else {
        var chartTitle = currentWard.properties[lang.wardLang] + "の感染者数";
    }


    var blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
    blueGradient.addColorStop(0, "rgba(0, 123, 255, 0.8)");
    blueGradient.addColorStop(0.2, "rgba(0, 123, 255, 0.6)");
    blueGradient.addColorStop(0.5, "rgba(0, 123, 255, 0.4)");
    blueGradient.addColorStop(0.8, "rgba(0, 123, 255, 0.2)");
    blueGradient.addColorStop(1, "rgba(0, 123, 255, 0.1)");
  
    stackedLine = new Chart(
      ctx,
      {
        type: "line",
        data: {
          labels: keys,
          datasets: [
            {
              data: values,
              borderColor: "rgba(0, 123, 255, 0.8)",
              backgroundColor: blueGradient,
            },
          ],
        },
        options: {
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            datalabels: {
              labels: {
                title: {
                  color: "black",
                  align: 260, // slight top-left; 3 dig values arent cropped out
                  offset: 3,
                  display: (context) => {
                    return (values.length - context.dataIndex) % 2;
                  },
                  opacity: (context) => {
                    return context.dataIndex == values.length - 1? 1: 0.5;
                  },
                  font: {
                    size: 10
                  }
                },
              },
            },
          },
          title: {
            display: true,
            text: chartTitle, //currentWard.properties[lang.wardChartLang], //
            fontColor: "#007bff",
          },
          elements: {
            line: {
              tension: 0,
            },
            point: {
              radius: 2,
              backgroundColor: "rgba(0, 123, 255, 0.8)",
            },
          },
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          layout: {
            backgroundColor: "blue",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: casesMaxValue,
                },
              },
            ],
          },
        },
      }
    );
  
  }
