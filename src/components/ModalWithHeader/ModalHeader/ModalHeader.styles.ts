import {Dimensions, StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const {width} = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    Container: {
      display: 'flex',
      flexDirection: 'row',
      width: width,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },
    firstContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: width,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },
  });

export default createStyles;
