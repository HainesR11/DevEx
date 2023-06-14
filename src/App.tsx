import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import AppStatusCheck from './StatusCheck';
import RootNavigation from './screens/RootNavigation';
import theme from './utils/styles/theme';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store, persist} from '@DevEx/utils/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle={'dark-content'} />
      ) : undefined}
      <Provider store={store}>
        <AppStatusCheck>
          <PersistGate persistor={persist}>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </PersistGate>
        </AppStatusCheck>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
