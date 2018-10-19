import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DevRoutingModule } from './dev-routing.module';

import { BaseComponent } from '@components/base/base.component';

const COMPONENTS = [
  BaseComponent
];

const COMPONENTS_NOROUNT = [
];

@NgModule({
  imports: [
    SharedModule,
    DevRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DevModule {}
