import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {ExampleEffect} from './example.effect';

@NgModule({
  imports: [
    EffectsModule.forRoot(
      [
        ExampleEffect,
      ]
    )
  ]
})

export class AppEffectsModule {

}
