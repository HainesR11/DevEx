import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.m,
      alignItems: 'center',
    },
    image: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
  });

export default createStyles;
