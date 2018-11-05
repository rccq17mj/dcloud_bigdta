import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatavModule} from "../../../../src/datav/datav.module";

const THIRDMODULES = [
  DatavModule
];

@NgModule({
  imports: [
    ...THIRDMODULES,
    CommonModule
  ],
  declarations: [],
  exports: [
    ...THIRDMODULES,
  ]
})
export class SharedModule { }
