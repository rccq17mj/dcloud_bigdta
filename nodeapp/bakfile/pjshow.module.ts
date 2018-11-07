import { MainPages } from '../../../../templates/ag6ready/src/app/app.component';//需要替换的地方 20181104094424
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PjshowRoutingModule } from './pjshow-routing.module';
import { PjshowPrviewComponent } from './prview/prview.component';
const COMPONENTS = [
  PjshowPrviewComponent,
  MainPages
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    PjshowRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class PjshowModule { }
