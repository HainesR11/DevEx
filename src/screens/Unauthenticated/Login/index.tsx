import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
import createStyles from './Login.styles';
import {PrimaryButton, RadioButton} from '@DevEx/components';
import {IconInput} from '@DevEx/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const styles = useThemedStyles(createStyles);

  const onPressLogin = () => {
    console.log('login complete');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <Image
          source={require('@DevEx/assets/DevExLogo.png')}
          style={styles.imageBackground}
        />
        <View>
          <IconInput
            placeholder="Email"
            Icon={() => (
              <FontAwesomeIcon
                style={styles.icon}
                size={20}
                icon={faEnvelope}
              />
            )}
          />
          <IconInput
            placeholder="Password"
            secure
            Icon={() => (
              <FontAwesomeIcon style={styles.icon} size={20} icon={faLock} />
            )}
          />
          <View style={styles.optionContainer}>
            <RadioButton text="Remember me?" />
            <Text>Forgot password?</Text>
          </View>
        </View>
        <View>
          <PrimaryButton
            title="LOGIN"
            styles={styles.button}
            onPress={() => onPressLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
