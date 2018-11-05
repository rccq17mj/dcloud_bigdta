import { NgModule } from '@angular/core';
import { AxisLabelComponent } from './axis-label/axis-label.component';
import {G2Component} from "./g2.component";
import {NgZorroAntdModule} from "ng-zorro-antd";

const COMPONENTS_NOROUNT = [
  //示例页面
  G2Component,
  // 组件
  AxisLabelComponent
];

@NgModule({
  imports: [
    NgZorroAntdModule
  ],
  declarations: [...COMPONENTS_NOROUNT],
  exports: [...COMPONENTS_NOROUNT]
})
export class G2Module { }
