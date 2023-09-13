import React, {useState} from 'react';
import {View} from 'react-native';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';

import {PrimaryButton} from '@DevEx/components';
import {ValidIconInput} from '@DevEx/components/input';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import createStyles from './Login.styles';

const LoginForm = () => {
  const styles = useThemedStyles(createStyles);
  const [username, setUsername] = useState('rhys@sky.uk');
  const [password, setPassword] = useState('testing');

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => console.log('You are logged in'))
      .catch(e => console.log(e));
  };

  return (
    <View style={styles.screenContainer}>
      <ValidIconInput
        icon={faUser}
        placeholder="Email"
        onChange={() => {}}
        isLoading={false}
        valid={true}
      />
      <PrimaryButton title="Login" onPress={onLogin} />
    </View>
  );
};
export default LoginForm;
