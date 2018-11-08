var dataVconfig = {
  components: function () {
    console.log('getDataVconfig');

    return {
      "app-axis-label": {
        // data: [
        //   { genre: 'Sports', sold: 10 },
        //   { genre: 'Strategy', sold: 100 },
        //   { genre: 'Action', sold: 10 },
        //   { genre: 'Shooter', sold: 10 },
        //   { genre: 'Other', sold: 10 }
        // ],
        chart: {
          width : 800, // 指定图表宽度
          height : 900 // 指定图表高度
        }
      }
    }
  }
}
