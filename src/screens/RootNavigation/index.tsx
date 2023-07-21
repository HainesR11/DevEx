import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '@DevEx/utils/store/store';
import Home from '../Authenticated/Home';

type TAuthenticatedScreenParams = {
  Home: undefined
}

const AuthStack = createStackNavigator<TAuthenticatedScreenParams>();

const RootNavigation = () => {
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name='Home' component={Home}/>
      </AuthStack.Navigator>
    )
};

export default RootNavigation;
