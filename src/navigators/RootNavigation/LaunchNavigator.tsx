import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AccountNavigator, TabNavigator} from '../index';

import 'react-native-gesture-handler';

type TAuthenticatedScreenParams = {
  TabNavigator: undefined;
  Account: undefined;
};

const AuthStack = createStackNavigator<TAuthenticatedScreenParams>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="TabNavigator" component={TabNavigator} />
      <AuthStack.Group screenOptions={{presentation: 'modal'}}>
        <AuthStack.Screen name="Account" component={AccountNavigator} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
