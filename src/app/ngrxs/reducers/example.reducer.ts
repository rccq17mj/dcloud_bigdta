import * as exampleActions from '../actions/example.action';
import { ExampleUserModel } from '@models/data-models/example/example.model';

export interface State {
  user: ExampleUserModel;
  authLoading: boolean;
}

export const initialState: State = {
  user: null,
  authLoading: false
};

export function reducer(state = initialState, action: exampleActions.ExampleUserActionsUnion): State {
  switch (action.type) {
    // 登录
    case exampleActions.ExampleUserActionTypes.LOGIN: {
      return {...state, authLoading: true};
    }
    // 登录成功
    case exampleActions.ExampleUserActionTypes.LOGIN_SUCCESS: {
      return {...state, authLoading: false, user: action.payload};
    }
    // 登录失败
    case exampleActions.ExampleUserActionTypes.LOGIN_FAIL: {
      return {...state, authLoading: false};
    }

    default: {
      return state;
    }
  }
}

export const getExampleUser = (state: State) => state.user;
