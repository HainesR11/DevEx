import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import HomeNavigator from '../home/HomeNavigator';

type TAuthenticatedScreenParams = {
  HomeNavigator: undefined;
};

const AuthStack = createStackNavigator<TAuthenticatedScreenParams>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName='HomeNavigator' screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="HomeNavigator" component={HomeNavigator} />
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
