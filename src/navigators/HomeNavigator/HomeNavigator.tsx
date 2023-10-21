import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@DevEx/screens/Authenticated/Home';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

type HomeNavParams = {
  HomeScreen: undefined;
};

const HomeNavigatorStack = createStackNavigator<HomeNavParams>();

const {width} = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={{width: width, height: 50}}>
      <TouchableOpacity onPress={() => {}}>
        <FontAwesomeIcon icon={faUser} />
      </TouchableOpacity>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <HomeNavigatorStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        header: () => <Header />,
      }}>
      <HomeNavigatorStack.Screen name="HomeScreen" component={Home} />
    </HomeNavigatorStack.Navigator>
  );
};
export default HomeNavigator;
