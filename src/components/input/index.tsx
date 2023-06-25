import React, {FC} from 'react';
import {TextInput, View} from 'react-native';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import {createStyles} from './input.styles';

type TInputProps = {
  placeholder: string;
  onChange: (e: string) => void;
};

type TIconInputProps = {
  Icon: FC;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
};

type TEmailIconInputProps = {
  Icon: FC;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
  valid: boolean;
  isLoading: boolean;
  value: string;
};

export const InputBox = ({placeholder, onChange}: TInputProps) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={{...styles.container}}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

export const IconInput = ({
  Icon,
  placeholder,
  secure = false,
  onChange,
}: TIconInputProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={{...styles.container}}>
      <Icon />
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
  Icon,
  placeholder,
  onChange,
  secure,
  isLoading,
  value,
}: TEmailIconInputProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.container, !valid && styles.Error]}>
      <Icon />
      <TextInput
        editable={!isLoading}
        value={value}
        secureTextEntry={secure}
        style={[styles.textInput, isLoading && styles.loading]}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};
