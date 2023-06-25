import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {faChevronLeft, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {PrimaryButton} from '@DevEx/components';
import {InputBox} from '@DevEx/components/input';
import {codeSentString} from '@DevEx/constants';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {TUnauthNavParams} from '@DevEx/screens/RootNavigation';

import {createStyles} from './ForgotPassword.styles';

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
