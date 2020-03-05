import React, { createContext, ReactNode, useReducer, Dispatch } from 'react';
import { AuthState, authReducer, AuthAction } from './authReducer';

type Props = {
  children: ReactNode;
};

export let AuthContext = createContext<
  AuthState & { dispatch: Dispatch<AuthAction> }
>({
  isLogin: false,
  userToken: '',
  dispatch: () => {},
});

export default function AuthContextProvider({ children }: Props) {
  let [authState, authDispatch] = useReducer(authReducer, {
    isLogin: false,
    userToken: '',
  });

  console.log('>> auth state from authContext', authState);
  return (
    <AuthContext.Provider value={{ ...authState, dispatch: authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
