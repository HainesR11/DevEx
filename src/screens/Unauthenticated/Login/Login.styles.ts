import colors from '@DevEx/utils/styles/palette/colors';
import {Theme} from '@DevEx/utils/styles/theme';
import {color} from '@shopify/restyle';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    screenContainer: {
      height: height - height / 10,
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      width: width,
      height: height - height / 5,
      alignItems: 'center',
      paddingHorizontal: theme.spacing.m,
      justifyContent: 'space-between',
    },
    imageBackground: {
      width: height / 4,
      height: height / 4,
    },
    inputBox: {
      width: width - width / 4,
      height: height / 15,
      backgroundColor: theme.colors.grey10,
      borderRadius: 7,
      padding: 10,
      marginBottom: 20,
    },
    text: {
      marginLeft: 10,
      color: colors.grey50,
    },
    button: {},
    icon: {
      alignContent: 'center',
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    invalidText: {
      textAlign: 'center',
      paddingBottom: 10,
      color: theme.colors.errorDark,
    },
  });
export default createStyles;
