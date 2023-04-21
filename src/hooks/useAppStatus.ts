import {useCallback, useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

import {fetchFirebase} from '@DevEx/utils/firebase';

type Status = 'loading' | 'maintenanceMode' | 'shouldUpgrade' | 'launchApp';

const useAppStatus = () => {
  const [appStatus, setAppStatus] = useState<Status>('loading');

  const appState = useRef<AppStateStatus>(AppState.currentState);

  const appStatusCheck = useCallback(async () => {
    await fetchFirebase();
    const maintenance = remoteConfig().getBoolean('show_maintenance_mode');

    if (maintenance) {
      setAppStatus('maintenanceMode');
    } else {
      setAppStatus('launchApp');
    }
  }, []);

  const handleAppStateChange = useCallback(
    (nextState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextState === 'active'
      ) {
        appStatusCheck();
      }

      appState.current = nextState;
    },
    [appStatusCheck],
  );

  useEffect(() => {
    appStatusCheck();

    const listener = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      listener.remove();
    };
  }, [appStatusCheck, handleAppStateChange]);
  return {appStatus};
};

export default useAppStatus;
