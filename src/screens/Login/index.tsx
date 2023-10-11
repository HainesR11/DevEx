import React, {Dispatch, SetStateAction, useState} from 'react';
import {Buffer} from 'buffer';
import {Dimensions, View} from 'react-native';

import {getTokenFromLogin} from '@DevEx/api';
import {GradientText, PrimaryButton, Text} from '@DevEx/components';
import ModalWithHeader from '@DevEx/components/ModalWithHeader/ModalWithHeader';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import createStyles from './Login.styles';
import theme from '@DevEx/utils/styles/theme';

type TLoginForm = {
  loginVisible: boolean;
  setLoginVisible: Dispatch<SetStateAction<boolean>>;
};

const LoginForm = ({loginVisible, setLoginVisible}: TLoginForm) => {
  const styles = useThemedStyles(createStyles);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = async () => {
    const hashedPassword = Buffer.from(password, 'utf-8').toString('base64');
    await getTokenFromLogin(username, hashedPassword);
  };

  const {height} = Dimensions.get('screen');

  return (
    <ModalWithHeader
      isVisible={loginVisible}
      setVisible={setLoginVisible}
      testID="LoginModal">
      <View style={styles.screenContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            height: height - height / 3,
          }}>
          <View style={[styles.loginButtonContainer]}>
            <GradientText
              testID="gradientGetStartedText"
              text={'Log in'}
              gradientStyle="devexMainGradient"
              textStyle={{fontSize: 30, textAlign: 'center'}}
            />
            <Text
              text="Sign into your account"
              testId="SignInText"
              textStyle={[styles.text, styles.textAlign]}
            />
          </View>
          <View>
            <OutlineTextInput
              style={[styles.inputStyle, styles.largeMarginBottom]}
              title={'Email Address'}
              testID=""
              onChange={event => setUsername(event.nativeEvent.text)}
            />
            <OutlineTextInput
              style={[styles.inputStyle, styles.smallMarginBottom]}
              title={'Password'}
              testID=""
              secureTextEntry
              onChange={event => setPassword(event.nativeEvent.text)}
            />
            <Text text="Forgot Password" testId="ForgotPassword.text" />
          </View>
          <View>
            <PrimaryButton title="Login" onPress={onLogin} />
            <Text
              textStyle={styles.textAlign}
              text="New user? Create Account"
              testId=""
            />
          </View>
        </View>
      </View>
    </ModalWithHeader>
  );
};
export default LoginForm;
