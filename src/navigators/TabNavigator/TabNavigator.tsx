import React from 'react';
import {faComment, faHouse, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  ACCOUNT_NAVIGATOR,
  ADD_POST_SCREEN,
  CHAT_NAVIGATOR,
  COMMUNITIES_NAVIGATOR,
  HOME_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import HomeNavigator from '@DevEx/navigators/HomeNavigator/HomeNavigator';
import colors from '@DevEx/utils/styles/palette/colors';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

const TabNavStack = createBottomTabNavigator<TRootNavigationProps>();

const BaseLayer = () => {
  return <></>;
};

const TabNavigator = () => {
  return (
    <TabNavStack.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '7%',
        },
      }}
      initialRouteName={HOME_NAVIGATOR}>
      <TabNavStack.Screen
        name={HOME_NAVIGATOR}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faHouse,
            }),
        }}
        component={HomeNavigator}
      />
      <TabNavStack.Screen
        name={COMMUNITIES_NAVIGATOR}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faUsers,
            }),
        }}
        component={BaseLayer}
      />
      <TabNavStack.Screen
        name={ADD_POST_SCREEN}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faComment,
            }),
        }}
        component={BaseLayer}
      />
      <TabNavStack.Screen
        name={CHAT_NAVIGATOR}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faComment,
            }),
        }}
        component={BaseLayer}
      />

      {/*
      TODO: To be replace the account account management screen
      <TabNavStack.Screen
        name={ACCOUNT_NAVIGATOR}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faUsers,
            }),
        }}
        component={BaseLayer}
      /> */}
    </TabNavStack.Navigator>
  );
};

export default TabNavigator;
