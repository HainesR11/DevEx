import {Theme} from '@DevEx/utils/styles/theme';
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
    button: {
      backgroundColor: theme.buttons.primary.background,
      width: width - width / 5,
      color: 'black',
    },
    icon: {
      alignContent: 'center',
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
export default createStyles;
