import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React, {useState} from 'react';
import {Image, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import createStyles from './Login.styles';
import {PrimaryButton} from '@DevEx/components';
import {IconInput} from '@DevEx/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {Buffer} from 'buffer';
import {ValidIconInput} from '@DevEx/components/input';
import {useNavigation} from '@react-navigation/native';
import {TUnauthNavParams} from '@DevEx/screens/RootNavigation';
import {FnEmailValidator, FnPasswordCheck} from './validators/loginValidators';

const passwordValidLogic = (email: boolean, password: boolean) => {
  switch (password) {
    case email:
    case password:
      return true;
    default:
      return false;
  }
  //passwordValidLogic(emailValid, passwordValid)
};

const Login = () => {
  const styles = useThemedStyles(createStyles);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<TUnauthNavParams>();

  const onPressLogin = () => {
    // Testing encoding - will later impement into onLogin Function
    // const decode = Buffer.from(password, 'base64').toString('utf8');
    FnEmailValidator(email, setEmailValid);
    !!emailValid && FnPasswordCheck(password, emailValid, setPasswordValid);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <Image
          source={require('@DevEx/assets/DevExLogo.png')}
          style={styles.imageBackground}
        />
        <View>
          {!emailValid && (
            <Text style={styles.invalidText}>Please enter a valid Email</Text>
          )}
          {emailValid && !passwordValid && (
            <Text style={styles.invalidText}>Invalid Password</Text>
          )}
          <ValidIconInput
            placeholder="Email"
            valid={emailValid}
            onChange={e => {
              setEmail(e);
            }}
            Icon={() => (
              <FontAwesomeIcon
                style={styles.icon}
                size={20}
                icon={faEnvelope}
              />
            )}
          />
          <ValidIconInput
            placeholder="Password"
            valid={passwordValid}
            onChange={e =>
              // setPassword(Buffer.from(e, 'utf-8').toString('base64'))
              setPassword(e)
            }
            secure
            Icon={() => (
              <FontAwesomeIcon style={styles.icon} size={20} icon={faLock} />
            )}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.text}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PrimaryButton
            title="LOGIN"
            styles={styles.button}
            onPress={onPressLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
