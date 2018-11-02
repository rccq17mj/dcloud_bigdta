import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

import { DatavModule } from '../../../datav/datav.module'

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  DatavModule
];
// endregion

// region: your componets & directives
import { ImageWrapperComponent } from './components/image-wrapper';
const COMPONENTS = [ImageWrapperComponent];
const DIRECTIVES = [];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
