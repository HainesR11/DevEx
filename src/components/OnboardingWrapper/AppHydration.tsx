import React from 'react';
import {SafeAreaView} from 'react-native';

import {LoadingSpinner} from '@DevEx/screens';

const AppHydration = () => {
  return (
    <SafeAreaView>
      <LoadingSpinner animating />
    </SafeAreaView>
  );
};

export default AppHydration;
