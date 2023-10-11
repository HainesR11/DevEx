import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {gradients} from '@DevEx/utils/styles/theme';

import createStyles from './text.styles';

type TGradientTextProps = {
  text: string;
  gradientStyle: keyof typeof gradients;
  testID?: string;
  textAlign?: 'left' | 'center' | 'right';
  lineHeight?: number;
  textStyle?: TextStyle;
  bold?: boolean;
  style?: ViewStyle | TextStyle;
};

type TTextProps = {
  text: string;
  testId: string;
  textStyle?: TextStyle | TextStyle[];
  bold?: boolean;
  italic?: boolean;
  onPress?: () => void;
  VMargin?: number;
  HMargin?: number;
};

export const GradientText = ({
  text,
  testID,
  textAlign = 'left',
  textStyle = {},
  gradientStyle,
  bold,
  lineHeight,
  style = {},
}: TGradientTextProps) => {
  const styles = useThemedStyles(createStyles);

  const additionalTextStyles = (maskStyle: StyleProp<TextStyle>) => {
    const textStyles = [maskStyle];

    textAlign && textStyles.push(styles[textAlign]);
    lineHeight && textStyles.push({lineHeight});

    return textStyles;
  };

  const textComponent = (maskStyle: StyleProp<TextStyle>) => (
    <RNText
      style={[
        additionalTextStyles(maskStyle),
        textStyle,
        bold && {fontWeight: 'bold'},
      ]}>
      {text}
    </RNText>
  );
  return (
    <View testID={testID} style={[styles.container, style, styles[textAlign]]}>
      <MaskedView maskElement={textComponent(styles.transparentBgr)}>
        <LinearGradient
          colors={gradients[gradientStyle]}
          start={{x: 0, y: 0}}
          end={{x: 0.8, y: 0}}>
          {textComponent(styles.transparent)}
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

export const Text = ({
  text,
  bold = false,
  testId,
  textStyle,
  italic,
  onPress,
  HMargin,
  VMargin,
  ...props
}: TTextProps) => {
  const styles = useThemedStyles(createStyles);
  return (
    <RNText
      testID={testId}
      onPress={onPress}
      {...props}
      style={[
        bold && styles.bold,
        italic && styles.italic,
        textStyle,
        {marginVertical: VMargin, marginHorizontal: HMargin},
      ]}>
      {text}
    </RNText>
  );
};
