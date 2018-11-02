import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
  selector: 'app-axis-label',
  templateUrl: './axis-label.component.html',
  styles: []
})
export class AxisLabelComponent implements OnInit {

  constructor() { }

  data = [];
  chart ;

  ngOnInit() {
  }

  chartData() {
    this.data = [
      {
        year: '1951 年',
        sales: 38
      }, {
        year: '1952 年',
        sales: 52
      }, {
        year: '1956 年',
        sales: 61
      }, {
        year: '1957 年',
        sales: 145
      }, {
        year: '1958 年',
        sales: 48
      }, {
        year: '1959 年',
        sales: 38
      }, {
        year: '1960 年',
        sales: 38
      }, {
        year: '1962 年',
        sales: 38
      }
    ];
    this.chart = new G2.Chart({
      container: 'axis-label', // 指定图表容器 ID
      width : 600, // 指定图表宽度
      height : 300 // 指定图表高度
    });

    this.chart.source(this.data);
    this.chart.interval().position('genre*sold').color('genre');
    //  渲染图表
    this.chart.render();
  }
}
