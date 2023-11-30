import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    // Home Header Styles
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

    // Comment View Header Styles
    active: {
      fontWeight: '900',
    },
    textStyle: {
      paddingVertical: theme.spacing.s,
      width: 140,
      textAlign: 'center',
    },
    textViewContainer: {
      borderBottomColor: theme.colors.grey50,
    },
    commentContainer: {
      width: '100%',
      borderBottomColor: theme.colors.grey20,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default createStyles;
