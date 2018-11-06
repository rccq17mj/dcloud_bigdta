import { NgModule } from '@angular/core';
import { G2Module } from './g2/g2.module'


// 注册组件包文档示列
const DATAVCOMPONENT = [
  G2Module
]

@NgModule({
  imports: [...DATAVCOMPONENT],
  exports: [...DATAVCOMPONENT]
})
export class DatavModule { }
