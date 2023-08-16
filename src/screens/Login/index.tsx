import { ValidIconInput } from '@DevEx/components/input';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Image, View} from 'react-native';
import createStyles from './Login.styles';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { Logo } from '@DevEx/assets';

const LoginForm = () => {
  const styles = useThemedStyles(createStyles)
  return (
    <View style={styles.screenContainer}>
      <Image source={Logo} style={styles.imageBackground}/>
      <ValidIconInput icon={faUser} placeholder='Email' onChange={() => {}} isLoading={false} valid={true} />
    </View>
  );
};
export default LoginForm;
