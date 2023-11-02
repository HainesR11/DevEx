import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ACCOUNT_NAVIGATOR,
  DEBUG_SCREEN,
  SEARCH_NAVIGATOR,
  TAB_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import DebugScreen from '@DevEx/screens/Debug/debub';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

import {AccountNavigator, SearchNavigator, TabNavigator} from '../index';

import 'react-native-gesture-handler';

const AuthStack = createStackNavigator<TRootNavigationProps>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={TAB_NAVIGATOR}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      <AuthStack.Group>
        <AuthStack.Screen
          options={{presentation: 'modal'}}
          name={ACCOUNT_NAVIGATOR}
          component={AccountNavigator}
        />
      </AuthStack.Group>
      <AuthStack.Screen name={SEARCH_NAVIGATOR} component={SearchNavigator} />
      <AuthStack.Screen name={DEBUG_SCREEN} component={DebugScreen} />
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
