import React, {useEffect, useState} from 'react';
import {Buffer} from 'buffer';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {PrimaryButton} from '@DevEx/components';
import {ValidIconInput} from '@DevEx/components/input';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {setUser} from '@DevEx/utils/store/userSlice/userSlice';

import {FnEmailValidator, FnPasswordCheck} from './validators/loginValidators';

import createStyles from './Login.styles';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const styles = useThemedStyles(createStyles);

  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch()
  const [password, setPassword] = useState<string>('');

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onPressLogin = async () => {
    setLoading(true);
    // Testing encoding - will later impement into onLogin Function
    // const decode = Buffer.from(password, 'base64').toString('utf8');

    FnEmailValidator(email, setEmailValid);
    FnPasswordCheck(password, emailValid, setPasswordValid);
    // !!emailValid && passwordValidLogic(password);
    setLoading(false);
  };

  useEffect(() => {
    if (emailValid && passwordValid) {
      dispatch(setUser({isAuthenticated: true}));
    }
  }, [emailValid, passwordValid]);

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
            isLoading={loading}
            value={email}
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
            value={password}
            isLoading={loading}
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
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PrimaryButton
            title="LOGIN"
            isLoading={loading}
            styles={styles.button}
            onPress={onPressLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
