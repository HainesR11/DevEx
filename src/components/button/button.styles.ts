import {Theme} from '@DevEx/utils/styles/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {},
    radio: {
      width: 19,
      height: 19,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.grey20,
      //   borderWidth: 2,
      borderRadius: 20,
    },
    radioContainer: {
      width: width / 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });