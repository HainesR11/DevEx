import React, {Dispatch, SetStateAction, useState} from 'react';
import {Buffer} from 'buffer';
import {TouchableOpacity, View} from 'react-native';

import {getTokenFromLogin} from '@DevEx/api';
import {GradientText, PrimaryButton, Text} from '@DevEx/components';
import ModalWithHeader from '@DevEx/components/ModalWithHeader/ModalWithHeader';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import createStyles from './Login.styles';

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

  return (
    <ModalWithHeader
      isVisible={loginVisible}
      setVisible={setLoginVisible}
      testID="LoginModal">
      <View style={styles.screenContainer}>
        <View style={styles.itemContainer}>
          <View style={[styles.loginButtonContainer]}>
            <GradientText
              testID="gradientGetStartedText"
              text={'Log in'}
              gradientStyle="devexMainGradient"
              textStyle={styles.gradientText}
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
            <Text
              textStyle={[styles.link]}
              text="Forgot Password?"
              testId="ForgotPassword.text"
            />
          </View>
          <View>
            <PrimaryButton title="Login" onPress={onLogin} />
            <View style={styles.createContainer}>
              <Text textStyle={styles.textAlign} text="New user?" testId="" />
              <TouchableOpacity>
                <Text
                  textStyle={[styles.textAlign, styles.link]}
                  text="Create Account"
                  testId=""
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ModalWithHeader>
  );
};
export default LoginForm;
