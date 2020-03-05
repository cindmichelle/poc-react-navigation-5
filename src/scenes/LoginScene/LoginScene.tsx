import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from './../../types/Navigation';
import { AuthContext } from '../../configs/auth/authContext';

export default function LoginScene() {
  let { navigate } = useNavigation<StackNavProp<'Login'>>();
  let { dispatch: authDispatch } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Move to Register Screen"
        onPress={() => navigate('Register')}
      />
      <Button
        title="Move to Home"
        onPress={() => authDispatch({ type: 'SIGN_IN', userToken: 'h4h4h4h4' })}
      />
    </View>
  );
}
