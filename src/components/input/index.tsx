import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {createStyles} from './input.styles';

type TIconInputProps = {
  Icon: FC;
  placeholder: string;
  secure?: boolean;
};

export const IconInput = ({
  Icon,
  placeholder,
  secure = false,
}: TIconInputProps) => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.container}>
      <Icon />
      <TextInput
        style={styles.textInput}
        secureTextEntry={secure}
        placeholder={placeholder}
      />
    </View>
  );
};
