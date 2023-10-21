import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@DevEx/screens/Authenticated/Home';

type HomeNavParams = {
  Account: undefined;
};

const AccountNavigatorStack = createStackNavigator<HomeNavParams>();

const AccountNavigator = () => {
  return (
    <AccountNavigatorStack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <AccountNavigatorStack.Screen name="Account" component={Home} />
    </AccountNavigatorStack.Navigator>
  );
};
export default AccountNavigator;
