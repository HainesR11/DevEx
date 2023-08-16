import LoginForm from '.';
import {SafeAreaView, Modal, Text, View} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@DevEx/utils/store/store';
import {PrimaryButton} from '@DevEx/components';
import createStyles from './Login.styles';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {strings} from '@DevEx/constants/stings';
import GradientText from '@DevEx/components/Text/text';

const Login = () => {
  const styles = useThemedStyles(createStyles);

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const {isAuthenticated} = useSelector((state: RootState) => state.user);

  const style = {
    
  }

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
          <GradientText testID='LoginGradientText' textStyle={{fontSize: 25}} lineHeight={40} text={"Welcome, Lets get you set up"} gradientStyle='devexMainGradient'/>
          <View style={styles.loginButtonContainer}>
            <PrimaryButton
              title="Continue"
              onPress={() => setLoginVisible(true)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
