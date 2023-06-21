import {Theme} from '@DevEx/utils/styles/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: 20,
      height: height,
    },
    inputContainer: {
      height: height / 1.5,
      backgroundColor: 'red',
      marginTop: 60,
      justifyContent: 'center',
    },
    checkedContainer: {
      height: height / 3,
      backgroundColor: 'red',
      marginTop: 60,
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
