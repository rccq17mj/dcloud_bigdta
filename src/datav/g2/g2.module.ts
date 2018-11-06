import { NgModule } from '@angular/core';
import { AxisLabelComponent } from './axis-label/axis-label.component';
import {G2Component} from "./g2.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CommonModule} from "@angular/common";


// 组件
const COMPONENTS_NOROUNT = [
  AxisLabelComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [G2Component,...COMPONENTS_NOROUNT],
  exports: [G2Component,...COMPONENTS_NOROUNT]
})
export class G2Module {

}
