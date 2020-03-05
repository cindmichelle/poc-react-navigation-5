import React, { useReducer, useContext } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from '../types/Navigation';
import AuthContextProvider, { AuthContext } from '../configs/auth/authContext';
import StackNavigator from './StackNavigator';

export const Stack = createStackNavigator<StackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
