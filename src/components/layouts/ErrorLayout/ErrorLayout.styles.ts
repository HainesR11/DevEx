import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 50,
    },
    textContainer: {
      height: 700,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default createStyles;
