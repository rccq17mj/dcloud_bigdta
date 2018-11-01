import { Action } from '@ngrx/store';
import { ExampleUserModel } from '@models/data-models/example/example.model';

export const ExampleUserActionTypes = {
  // 登陆
  LOGIN:                      '[ExampleUser] Login',
  // 登陆成功
  LOGIN_SUCCESS:              '[ExampleUser] LoginSuccess',
  // 登陆失败
  LOGIN_FAIL:                 '[ExampleUser] LoginFail',
};

// 登陆
export class ExampleUserLoginAction implements Action {
  readonly type = ExampleUserActionTypes.LOGIN;
  constructor(public payload: {username: string, password: string}) {}
}
// 登陆成功
export class ExampleUserLoginSuccessAction implements Action {
  readonly type = ExampleUserActionTypes.LOGIN_SUCCESS;
  constructor(public payload: ExampleUserModel) {}
}
// 登陆失败
export class ExampleUserLoginFailAction implements Action {
  readonly type = ExampleUserActionTypes.LOGIN_FAIL;
  constructor(public payload = null) {}
}

export type ExampleUserActionsUnion =
  ExampleUserLoginAction             |
  ExampleUserLoginSuccessAction      |
  ExampleUserLoginFailAction;

