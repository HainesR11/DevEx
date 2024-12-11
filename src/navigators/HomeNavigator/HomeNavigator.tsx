import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeHeader from '@DevEx/components/Headers/HomeHeader';
import {HOME_SCREEN, NOTIFICATION_SCREEN} from '@DevEx/constants/screenNames';
import Home from '@DevEx/screens/Home/Home';
import colors from '@DevEx/utils/styles/palette/colors';
import {THomeNagigatorProps} from '@DevEx/utils/types/types';

const HomeNavigatorStack = createStackNavigator<THomeNagigatorProps>();
const baseLayer = () => {
  return <></>;
};

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeNavigatorStack.Screen
        options={{
          cardStyle: {
            backgroundColor: colors.grey5,
          },
          headerStyle: {
            backgroundColor: colors.grey2,
          },
          header: props =>
            HomeHeader({isHomeScreen: true, title: props.route.name}),
        }}
        name={HOME_SCREEN}
        component={Home}
      />
      <HomeNavigatorStack.Screen
        name={NOTIFICATION_SCREEN}
        component={baseLayer}
      />
    </HomeNavigatorStack.Navigator>
  );
};
export default HomeNavigator;
