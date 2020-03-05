export type AuthState = {
  isLogin: boolean;
  userToken: string;
};

export type AuthAction =
  | {
      type: 'SIGN_IN';
      userToken: string;
    }
  | {
      type: 'SIGN_OUT';
    };

export function authReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case 'SIGN_IN': {
      let { userToken } = action;
      console.log('>> FROM SIGN IN', action);

      return {
        ...state,
        isLogin: true,
        userToken,
      };
    }
    case 'SIGN_OUT': {
      console.log('>> FROM SIGN OUT', action);
      return {
        ...state,
        isLogin: false,
        userToken: null,
      };
    }
    default: {
      return state;
    }
  }
}
