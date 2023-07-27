import LoginForm from '.';
import {SafeAreaView, Modal, Text, View} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@DevEx/utils/store/store';
import {PrimaryButton} from '@DevEx/components';
import createStyles from './Login.styles';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {strings} from '@DevEx/constants/stings';

const Login = () => {
  const styles = useThemedStyles(createStyles);

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const {isAuthenticated} = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        visible={loginVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setLoginVisible(false);
        }}>
        <LoginForm />
      </Modal>
      {!isAuthenticated && (
        <View style={styles.viewContainer}>
          <Text>{strings.loginText}</Text>
          <View style={styles.loginButtonContainer}>
            <PrimaryButton
              title="Log in"
              onPress={() => setLoginVisible(true)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
