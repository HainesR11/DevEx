import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigator} from '../index';

import 'react-native-gesture-handler';

type TAuthenticatedScreenParams = {
  TabNavigator: undefined;
};

const AuthStack = createStackNavigator<TAuthenticatedScreenParams>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="TabNavigator" component={TabNavigator} />
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
