import React from 'react';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_NAVIGATOR} from '@DevEx/constants/screenNames';
import HomeNavigator from '@DevEx/navigators/HomeNavigator/HomeNavigator';
import colors from '@DevEx/utils/styles/palette/colors';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

const TabNavStack = createBottomTabNavigator<TRootNavigationProps>();

const TabNavigator = () => {
  return (
    <TabNavStack.Navigator initialRouteName={HOME_NAVIGATOR}>
      <TabNavStack.Screen
        name={HOME_NAVIGATOR}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveTintColor: colors.grey80,
          tabBarInactiveTintColor: colors.grey40,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size}) => (
            <FontAwesomeIcon
              size={size}
              color={focused ? colors.grey80 : colors.grey40}
              icon={faHouse}
            />
          ),
        }}
        component={HomeNavigator}
      />
    </TabNavStack.Navigator>
  );
};

export default TabNavigator;
