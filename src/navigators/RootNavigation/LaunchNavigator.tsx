import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ACCOUNT_NAVIGATOR,
  COMMENT_SCREEN,
  SEARCH_NAVIGATOR,
  TAB_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

import {AccountNavigator, SearchNavigator, TabNavigator} from '../index';

import 'react-native-gesture-handler';
import CommentView from '@DevEx/screens/CommentView/CommentView';

const AuthStack = createStackNavigator<TRootNavigationProps>();

const LaunchNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={TAB_NAVIGATOR}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
      <AuthStack.Screen
        options={{presentation: 'modal'}}
        name={ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
      />
      <AuthStack.Screen
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
        name={COMMENT_SCREEN}
        component={CommentView}
      />
      <AuthStack.Screen name={SEARCH_NAVIGATOR} component={SearchNavigator} />
    </AuthStack.Navigator>
  );
};

export default LaunchNavigator;
