window.onload = function () {
  var chartDom = document.getElementById("main");
  var myChart = echarts.init(chartDom);
  var option;

  console.log(coffeeData)

  option = {
    title: {
      text: "Amount of Coffee Sold Over The World",
      subtext: "Average Daily Sold Count",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: coffeeData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
};
