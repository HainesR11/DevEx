import React from 'react';
import {TextInput, TextStyle, View} from 'react-native';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import {createStyles} from './input.styles';

type TInputProps = {
  placeholder: string;
  onChange: (e: string) => void;
  style: TextStyle;
};

type TIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
};

type TEmailIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
  valid: boolean | undefined;
  isLoading: boolean;
  value?: string;
};

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
