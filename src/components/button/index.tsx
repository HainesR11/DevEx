import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import React, {FC, useState} from 'react';
import {Pressable, TouchableOpacity, View, Text} from 'react-native';
import {createStyles} from './button.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

type TButtonProps = {
  styles: any;
  title: string;
  onPress: () => {} | FC;
};

export const PrimaryButton = ({styles, title, onPress}: TButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

type TRadioButton = {
  text: string;
};
export const RadioButton = ({text}: TRadioButton) => {
  const styles = useThemedStyles(createStyles);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.radioContainer}>
      <Pressable onPress={() => setChecked(!checked)} style={styles.radio}>
        {checked && <FontAwesomeIcon icon={faCheck} />}
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
};
