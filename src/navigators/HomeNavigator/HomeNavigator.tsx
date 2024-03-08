import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeHeader} from '@DevEx/components/Headers/Headers';
import {HOME_SCREEN} from '@DevEx/constants/screenNames';
import Home from '@DevEx/screens/Home/Home';
import {TRootNavigationProps} from '@DevEx/utils/types/types';
import theme from '@DevEx/utils/styles/theme';
import colors from '@DevEx/utils/styles/palette/colors';

const HomeNavigatorStack = createStackNavigator<TRootNavigationProps>();

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeNavigatorStack.Screen
        options={{
          cardStyle: {
            backgroundColor: colors.grey10,
          },
          headerStyle: {
            backgroundColor: colors.grey2,
          },
          header: props => (
            <HomeHeader isHomeScreen={true} title={props.route.params} />
          ),
        }}
        name={HOME_SCREEN}
        component={Home}
      />
    </HomeNavigatorStack.Navigator>
  );
};
export default HomeNavigator;
