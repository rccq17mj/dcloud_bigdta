var dataVconfig = {
  components: function () {
    console.log('getComponent');

    return {
      "app-axis-label": {
        data: [
          { genre: 'Sports', sold: 110 },
          { genre: 'Strategy', sold: 10 },
          { genre: 'Action', sold: 10 },
          { genre: 'Shooter', sold: 10 },
          { genre: 'Other', sold: 10 }
        ],
        chart: {
          width : 200, // 指定图表宽度
          height : 300 // 指定图表高度
        }
      }
    }
  }
}
