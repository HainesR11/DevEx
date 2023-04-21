import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import createStyles from './Login.styles';

const Login = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <SafeAreaView>
      <View style={styles.screenContainer}>
        <Image
          source={require('@DevEx/assets/DevEx(NoBackground).png')}
          style={styles.imageBackground}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
