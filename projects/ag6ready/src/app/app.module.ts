import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';

import  { createCustomElement } from '@angular/elements';

import { MainPages } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SharedModule} from "../shared/shared.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    MainPages
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  //bootstrap: [AppComponent]
  entryComponents :  [
    MainPages
 ]
})
export class AppModule {
  constructor(private injector : Injector){
    const cust_tag = createCustomElement(MainPages, {injector : this.injector});
    customElements.define('custom-items',cust_tag);
  }

  ngDoBootstrap() {}
 }
