import React, { useContext } from 'react';
import { Button } from 'react-native';
import { Stack } from './AppNavigator';
import { AuthContext } from '../configs/auth/authContext';
import { HomeScene, DetailsScene, LoginScene, RegisterScene } from '../scenes';

export default function StackNavigator() {
  let { isLogin, dispatch: authDispatch } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName={isLogin ? 'Home' : 'Login'}
      screenOptions={
        isLogin
          ? {
              headerRight: () => (
                <Button
                  title="Log Out"
                  onPress={() => authDispatch({ type: 'SIGN_OUT' })}
                />
              ),
            }
          : null
      }
    >
      {isLogin ? (
        <>
          <Stack.Screen name="Home" component={HomeScene} />
          <Stack.Screen
            name="Details"
            component={DetailsScene}
            options={{ title: 'Default Title' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScene}
            options={{ animationTypeForReplace: isLogin ? 'push' : 'pop' }}
          />
          <Stack.Screen name="Register" component={RegisterScene} />
        </>
      )}
    </Stack.Navigator>
  );
}
