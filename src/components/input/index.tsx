import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
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
}: TEmailIconInputProps) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.container, !valid && styles.Error]}>
      <Icon />
      <TextInput
        secureTextEntry={secure}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};
