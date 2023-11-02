import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SEARCH_SCREEN} from '@DevEx/constants/screenNames';
import {SearchScreen} from '@DevEx/screens';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

const SearchStack = createStackNavigator<TRootNavigationProps>();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{headerShown: false}}
        name={SEARCH_SCREEN}
        component={SearchScreen}
      />
    </SearchStack.Navigator>
  );
};
export default SearchNavigator;
