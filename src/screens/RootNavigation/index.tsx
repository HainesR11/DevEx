import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Unauthenticated/Login';

import 'react-native-gesture-handler';

type TUnauthenticatedScreenParams = {
  Login: undefined;
  CreateAccount: undefined;
};

const UnauthStack = createStackNavigator<TUnauthenticatedScreenParams>();

const RootNavigation = () => {
  return (
    <UnauthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <UnauthStack.Screen name="Login" component={Login} />
    </UnauthStack.Navigator>
  );
};

export default RootNavigation;
