import remoteConfig from '@react-native-firebase/remote-config';

import {firebaseDefaults} from '@DevEx/constants';

export const fetchFirebase = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 30000,
  });

  await remoteConfig()
    .setDefaults(firebaseDefaults)
    .then(() =>
      remoteConfig()
        .fetchAndActivate()
        .then(active => console.log('firebase active - ', active))
        .catch(error => console.log('error - ', error)),
    )
    .catch(error => console.log('error - ', error));
};
