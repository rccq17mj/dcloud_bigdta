import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
  selector: 'app-axis-label',
  templateUrl: './axis-label.component.html',
  styles: []
})
export class AxisLabelComponent implements OnInit {

  @Input()
  dataConfig?: object;

  /**
   * 渲染回调，组件会把真实的configure回传回pages
   */
  @Output()
  call_back? = new EventEmitter<object>();

  /**
   * 当前组件有哪些可维护的属性
   * @type {{data: {genre: string; sold: number}[]; chart: {width: number; height: number}}}
   */
  configure = {
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ],
    chart: {
      width : 600, // 指定图表宽度
      height : 300 // 指定图表高度
    }
  };

  // g2chart
  chart ;

  /**
   * 用于外部配置
   * @param {object} dataConfig
   */
  constructor() {}

  ngOnInit() {
    if(this.dataConfig)
      this.configure = {...this.configure,...this.dataConfig};
    this.chartData();
  }

  chartData() {
    this.chart = new G2.Chart({...this.configure.chart,...{container: 'axis_label'}});

    this.chart.source(this.configure.data);
    this.chart.interval().position('genre*sold').color('genre');
    //  渲染图表
    this.chart.render();

    this.call_back.emit(this.configure);
  }
}
