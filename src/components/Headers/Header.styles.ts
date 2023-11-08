import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    HomeScreenContainer: {
      flexDirection: 'row',
      marginHorizontal: theme.spacing.m,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    container: {
      flexDirection: 'row',
      marginHorizontal: theme.spacing.m,
      marginVertical: theme.spacing.s,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    title: {
      fontSize: 17,
      width: 250,
      right: theme.spacing.s,
      textAlign: 'center',
    },
    chevron: {
      right: 60,
    },
  });

export default createStyles;
