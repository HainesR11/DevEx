import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {createStyles} from './ForgotPassword.styles';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {useNavigation} from '@react-navigation/native';
import {TUnauthNavParams} from '@DevEx/screens/RootNavigation';
import {InputBox} from '@DevEx/components/input';
import {PrimaryButton} from '@DevEx/components';
import {codeSentString} from '@DevEx/constants';

type Email = string;

const ForgotPassword = () => {
  const styles = useThemedStyles(createStyles);

  const [email, setEmail] = useState<Email>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const navigation = useNavigation<TUnauthNavParams>();

  const CodeSent = () => {
    return (
      <>
        <TouchableOpacity onPress={() => setConfirmed(false)}>
          <FontAwesomeIcon icon={faChevronLeft} size={20} />
        </TouchableOpacity>
        <View style={styles.checkedContainer}>
          <FontAwesomeIcon icon={faCircleCheck} color="green" size={50} />
          <Text>{codeSentString}</Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {confirmed ? (
        <CodeSent />
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={20} />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text>This is the Forgot Password screen </Text>
            <InputBox
              placeholder="Email"
              onChange={e => {
                setEmail(e);
              }}
            />
            <PrimaryButton
              title="Send Code"
              onPress={() => {
                setConfirmed(true);
                console.log(confirmed);
              }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ForgotPassword;
