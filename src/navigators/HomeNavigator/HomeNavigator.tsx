import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeHeader} from '@DevEx/components/Headers/Headers';
import {COMMENT_SCREEN, HOME_SCREEN} from '@DevEx/constants/screenNames';
import CommentView from '@DevEx/screens/CommentView/CommentView';
import Home from '@DevEx/screens/Home/Home';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

const HomeNavigatorStack = createStackNavigator<TRootNavigationProps>();

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeNavigatorStack.Screen
        options={{
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
