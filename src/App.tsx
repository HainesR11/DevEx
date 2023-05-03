import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import AppStatusCheck from './StatusCheck';
import RootNavigation from './screens/RootNavigation';
import theme from './utils/styles/theme';
import {Platform, StatusBar} from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStatusCheck>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle={'dark-content'} />
        ) : undefined}
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </AppStatusCheck>
    </ThemeProvider>
  );
};

export default App;
