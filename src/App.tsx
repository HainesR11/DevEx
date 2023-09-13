import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import {persist, store} from '@DevEx/utils/store/store';

import AppStatusCheck from './StatusCheck';
import OnboardingWrapper from './components/OnboardingWrapper/OnboardingWrapper';
import LaunchNavigator from './navigators/RootNavigation/LaunchNavigator';
import theme from './utils/styles/theme';

const App = () => {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle={'dark-content'} />
      ) : undefined}
      <Provider store={store}>
        <AppStatusCheck>
          <PersistGate persistor={persist}>
            <OnboardingWrapper>
              <NavigationContainer>
                <LaunchNavigator />
              </NavigationContainer>
            </OnboardingWrapper>
          </PersistGate>
        </AppStatusCheck>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
