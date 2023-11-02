import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import theme from '@DevEx/utils/styles/theme';

import LoadingSpinner from '../loadingSpinner/loadingSpinner';

import {createStyles} from './button.styles';

type TButtonProps = {
  styles?: any;
  title: string;
  isLoading?: boolean;
  onPress: () => void;
};

export const PrimaryButton = ({
  styles,
  title,
  isLoading,
  onPress,
}: TButtonProps) => {
  const style = createStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...style.button, ...styles}}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Text style={style.button.text}>{title}</Text>
        )}
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
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (checked) {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    if (!checked) {
      rotateAnim.setValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View style={styles.radioContainer}>
      <Pressable onPress={() => setChecked(!checked)} style={styles.radio}>
        {checked && (
          <Animated.View style={{opacity: rotateAnim}}>
            <FontAwesomeIcon icon={faCheck} />
          </Animated.View>
        )}
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
};
