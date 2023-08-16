import LinearGradient from 'react-native-linear-gradient';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import theme, {gradients} from '@DevEx/utils/styles/theme';
import createStyles from './text.styles';
import MaskedView from '@react-native-masked-view/masked-view';

type TGradienttext = {
  text: string;
  gradientStyle: keyof typeof gradients;
  testID: string;
  textAlign?: 'left' | 'center' | 'right';
  lineHeight?: number;
  textStyle?: TextStyle
  bold?: boolean
  style?: ViewStyle | TextStyle;
};

const GradientText = ({
  text,
  testID,
  textAlign = 'left',
  textStyle = {},
  gradientStyle,
  bold,
  lineHeight,
  style = {},
}: TGradienttext) => {
  const styles = createStyles(theme);

  const additionalTextStyles = (maskStyle: StyleProp<TextStyle>) => {
    const textStyles = [maskStyle];

    textAlign && textStyles.push(styles[textAlign]);
    lineHeight && textStyles.push({lineHeight});

    return textStyles;
  };

  const textComponent = (maskStyle: StyleProp<TextStyle>) => (
    <Text style={[additionalTextStyles(maskStyle), textStyle, bold && {fontWeight: "bold"}]}>
      {text}
    </Text>
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

export default GradientText;
