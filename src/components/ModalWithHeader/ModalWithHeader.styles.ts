import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.modalBackground,
    },
    contentContainer: {
      flexGrow: 1,
    },

    header: {
      alignItems: 'center',
      height: theme.spacing['3xl'],
      borderBottomColor: theme.colors.grey5,
      borderBottomWidth: 1.5,
    },
    gradientLine: {
      width: 450,
      height: 5,
      marginBottom: theme.spacing.xs,
    },
    image: {
      marginBottom: theme.spacing.m,
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
  });

export default createStyles;
