import {Theme} from '@DevEx/utils/styles/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    screenContainer: {
      width: width,
      height: height,
      alignItems: 'center',
      paddingHorizontal: theme.spacing.m,
      justifyContent: 'space-around',
    },
    imageBackground: {
      width: width,
      height: height / 6,
    },
  });
export default createStyles;
