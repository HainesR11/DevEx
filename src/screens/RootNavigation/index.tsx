import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import {Login, ForgotPassword} from '@DevEx/screens/Unauthenticated';

import 'react-native-gesture-handler';

type TUnauthenticatedScreenParams = {
  Login: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
};

export type TUnauthNavParams =
  StackNavigationProp<TUnauthenticatedScreenParams>;

const UnauthStack = createStackNavigator<TUnauthenticatedScreenParams>();

const RootNavigation = () => {
  return (
    <UnauthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <UnauthStack.Screen name="Login" component={Login} />
      <UnauthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </UnauthStack.Navigator>
  );
};

export default RootNavigation;
