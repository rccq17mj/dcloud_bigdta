import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';

import { ExampleHttpComponent } from './http/http.component';
import { ExampleNgrxComponent } from './ngrx/ngrx.component';

/**
 * 组件
 */
const COMPONENTS = [
  ExampleHttpComponent,
  ExampleNgrxComponent
];

/**
 * 弹出框组件
 */
const COMPONENTS_NOROUNT = [

];

@NgModule({
  imports: [
    SharedModule,
    ExampleRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: [
    ...COMPONENTS_NOROUNT
  ]
})
export class ExampleModule { }
