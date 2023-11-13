import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import useAppStatus from '@DevEx/hooks/useAppStatus';
import {LoadingSpinner, Maintenance} from '@DevEx/screens';

const AppStatusCheck = ({children}: {children: Element}) => {
  const {appStatus} = useAppStatus();

  switch (appStatus) {
    case 'loading':
      return (
        <SafeAreaView>
          <LoadingSpinner animating />
        </SafeAreaView>
      );
    case 'maintenanceMode':
      return <Maintenance />;
    case 'shouldUpgrade':
    case 'launchApp':
    default:
      return <>{children}</>;
  }
};
export default AppStatusCheck;
