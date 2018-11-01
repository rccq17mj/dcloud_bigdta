import {NgModule} from '@angular/core';
import {ActionReducerMap, createSelector, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromExample from './example.reducer';

export interface State {
  example: fromExample.State;
}

const reducers: ActionReducerMap<State> = {
  example: fromExample.reducer,
};

export const getExampleState = (state: State) => state.example;
export const getExampleUser = createSelector(getExampleState, fromExample.getExampleUser);

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ]
})

export class AppStoreModule {

}
