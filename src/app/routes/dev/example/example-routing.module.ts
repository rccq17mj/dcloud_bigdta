import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleHttpComponent } from './http/http.component';
import { ExampleNgrxComponent } from './ngrx/ngrx.component';

/**
 * 路由配置
 */
const routes: Routes = [
  // http
  { path: 'http', component: ExampleHttpComponent },
  // http
  { path: 'ngrx', component: ExampleNgrxComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ExampleRoutingModule { }
