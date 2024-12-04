import React from 'react';
import {
  faBars,
  faHouse,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  ACCOUNT_MANAGEMENT,
  COMMUNITIES_NAVIGATOR,
  HOME_NAVIGATOR,
  SEARCH_NAVIGATOR,
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
        name={SEARCH_NAVIGATOR}
        component={BaseLayer}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faMagnifyingGlass,
            }),
        }}
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
              icon: faUserGroup,
            }),
        }}
        component={BaseLayer}
      />
      <TabNavStack.Screen
        name={ACCOUNT_MANAGEMENT}
        options={{
          headerShown: false,
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused, size}) =>
            FontAwesomeIcon({
              size,
              color: focused ? colors.primaryBlue : colors.grey20,
              icon: faBars,
            }),
        }}
        component={BaseLayer}
      />
    </TabNavStack.Navigator>
  );
};

export default TabNavigator;
