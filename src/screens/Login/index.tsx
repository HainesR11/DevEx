import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
// import {Buffer} from 'buffer';
import {Animated, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

// import {getTokenFromLogin} from '@DevEx/api';
import {GradientText, PrimaryButton, Text} from '@DevEx/components';
import ModalWithHeader from '@DevEx/components/ModalWithHeader/ModalWithHeader';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import {TouchableText} from '@DevEx/components/Text/text';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {setUser} from '@DevEx/utils/store/userSlice/userSlice';

import ForgotPassword from './ForgotPassword/ForgotPassword';

import createStyles from './Login.styles';

type TLoginForm = {
  loginVisible: boolean;
  setLoginVisible: Dispatch<SetStateAction<boolean>>;
};

const convertToBase64 = (file: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(console.log('---- base64 -----', fileReader.result));
    };
    fileReader.onerror = e => console.log('error', e);
  });
};

const LoginForm = ({loginVisible, setLoginVisible}: TLoginForm) => {
  const styles = useThemedStyles(createStyles);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [createUser, setCreateUser] = useState<boolean>(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;

  const onLogin = async () => {
    // const hashedPassword = Buffer.from(password, 'utf-8').toString('base64');
    // await getTokenFromLogin(username, hashedPassword);
    dispatch(setUser({isAuthenticated: true}));
  };

  useEffect(() => {
    createUser
      ? (Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }).start(),
        Animated.timing(positionAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }).start())
      : (Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(),
        Animated.timing(positionAnim, {
          toValue: -50,
          duration: 500,
          useNativeDriver: false,
        }).start());
  }, [createUser, fadeAnim, positionAnim]);

  if (forgotPassword) {
    return (
      <ModalWithHeader
        isVisible={loginVisible}
        onRequestClose={() => {
          setLoginVisible(false);
          setForgotPassword(false);
        }}
        goBack={() => setForgotPassword(false)}
        testID="LoginModal">
        <ForgotPassword />
      </ModalWithHeader>
    );
  }

  return (
    <ModalWithHeader
      isVisible={loginVisible}
      onRequestClose={() => {
        setLoginVisible(false);
        setCreateUser(false);
      }}
      goBack={createUser ? () => setCreateUser(false) : undefined}
      testID="LoginModal">
      <View style={styles.screenContainer}>
        <View style={styles.itemContainer}>
          <View style={[styles.loginButtonContainer]}>
            <GradientText
              testID="gradientGetStartedText"
              text={!createUser ? 'Log in' : 'Create Account'}
              gradientStyle="devexMainGradient"
              textStyle={styles.gradientText}
            />
            <Text
              text={
                !createUser
                  ? 'Sign into your account'
                  : 'Create your new account'
              }
              testId="SignInText"
              textStyle={[styles.text, styles.textAlign]}
            />
          </View>
          <Animated.View style={{top: positionAnim}}>
            <Animated.View style={[{opacity: fadeAnim, bottom: positionAnim}]}>
              <OutlineTextInput
                style={[styles.inputStyle, styles.largeMarginBottom]}
                title={'Name'}
                testID=""
                onChange={event => setName(event.nativeEvent.text)}
              />
            </Animated.View>
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
            {!createUser && (
              <TouchableText
                onPress={() => setForgotPassword(true)}
                textStyle={[styles.link]}
                text="Forgot Password?"
                testId="ForgotPassword.text"
              />
            )}
          </Animated.View>
          <View>
            <PrimaryButton
              title={createUser ? 'Create User' : 'Login'}
              onPress={onLogin}
            />
            {!createUser ? (
              <View style={styles.createContainer}>
                <Text textStyle={styles.textAlign} text="New user?" testId="" />
                <TouchableOpacity onPress={() => setCreateUser(true)}>
                  <Text
                    textStyle={[styles.textAlign, styles.link]}
                    text="Create Account"
                    testId=""
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.createContainer}>
                <Text
                  textStyle={styles.textAlign}
                  text="Have an account?"
                  testId=""
                />
                <TouchableOpacity
                  onPress={() =>
                    convertToBase64(require('../../assets/me.jpg'))
                  }>
                  <Text
                    textStyle={[styles.textAlign, styles.link]}
                    text="Login"
                    testId=""
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </ModalWithHeader>
  );
};
export default LoginForm;
