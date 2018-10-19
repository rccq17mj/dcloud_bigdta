import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as exampleActions from '../actions/example.action';
import { exhaustMap, map } from 'rxjs/operators';
import { ExampleRequest } from '@requests/example/example.request';
import { Router } from '@angular/router';

@Injectable()
export class ExampleEffect {
  constructor(
    private actions$: Actions,
    private exampleRequest: ExampleRequest,
    private router: Router
  ) {}

  /**
   * 登录
   */
  @Effect()
  login$ = this.actions$.pipe(
    ofType<exampleActions.ExampleUserLoginAction>(exampleActions.ExampleUserActionTypes.LOGIN),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.exampleRequest.login(payload['username'], payload['password']).pipe(
        map(user => {
          if (user) {
            // 请求用户信息
            return new exampleActions.ExampleUserLoginSuccessAction(user);
          }
          return new exampleActions.ExampleUserLoginFailAction();
        })
      )
    })
  );

  // /**
  //  * 登录或者注册成功，进入主页
  //  */
  // @Effect({ dispatch: false })
  // loginOrRegistSuccess = this.actions$.pipe(
  //   ofType(exampleActions.ExampleUserActionTypes.LOGIN_SUCCESS),
  //   map(() => this.router.navigate(['/']))
  // );
}
