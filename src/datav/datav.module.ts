import { NgModule } from '@angular/core';
import { G2Module } from './g2/g2.module'

@NgModule({
  imports: [
    G2Module
  ],
  exports: [G2Module]
})
export class DatavModule { }
