import { MainPages } from '../../../../templates/ag6ready/src/app/app.component';
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
