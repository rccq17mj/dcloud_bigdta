import { MainPages } from '../../../../templates/ag6ready/src/app/app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PjshowPrviewComponent } from './prview/prview.component';

const routes: Routes = [
  { path: 'prview/:id', component: PjshowPrviewComponent },
  { path: 'goshow', component: MainPages},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PjshowRoutingModule { }
