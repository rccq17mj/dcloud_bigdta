import { NgModule } from '@angular/core';

import { AppEffectsModule } from '@ngrxs/effects';
import { AppStoreModule } from '@ngrxs/reducers';

@NgModule({
  imports: [
    AppStoreModule,
    AppEffectsModule
  ],
})
export class NgrxModule {}
