import React from 'react';
import {TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import {createStyles} from './input.styles';

export const InputBox = ({
  placeholder,
  onChange,
  style,
  ...props
}: TInputProps) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={{...styles.container}}>
      <TextInput
        style={[styles.textInput, style]}
        placeholder={placeholder}
        onChangeText={onChange}
        {...props}
      />
    </View>
  );
};

export const IconInput = ({
  icon,
  placeholder,
  secure = false,
  onChange,
}: TIconInputProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={{...styles.container}}>
      <FontAwesomeIcon icon={icon} />
      <TextInput
        style={styles.textInput}
        secureTextEntry={secure}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

export const ValidIconInput = ({
  valid,
  icon,
  placeholder,
  onChange,
  secure,
  isLoading,
  ...props
}: TEmailIconInputProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.container, valid === false && styles.Error]}>
      <FontAwesomeIcon icon={icon} />
      <TextInput
        editable={!isLoading}
        secureTextEntry={secure}
        style={[styles.textInput, isLoading && styles.loading]}
        placeholder={placeholder}
        onChangeText={onChange}
        {...props}
      />
    </View>
  );
};

type TVerificationCodeInput = {
  maxNumber?: Number;
  valid?: boolean;
  onChange?: () => void;
  data: Array<Number>;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// TODO: Verification input text plaveholder
export const VerificationCodeInput = ({
  maxNumber,
  data = [],
  valid,
  onChange,
}: TVerificationCodeInput) => {
  return (
    <View
      style={{
        width: 300,
        height: 100,
        justifyContent: 'center',
        backgroundColor: 'red',
        alignContent: 'center',
      }}>
      <TextInput
        maxLength={6}
        style={{letterSpacing: 40, textAlign: 'center'}}
      />
    </View>
  );
};
