import {Dimensions, StyleSheet} from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import {Theme} from '@DevEx/utils/styles/theme';

const {height} = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    // Modal view
    screenContainer: {
      height: height - height / 5,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textContainer: {
      width: 300,
      marginBottom: theme.spacing.m,
    },
    image: {
      marginBottom: theme.spacing.m,
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    textAlign: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.s,
    },
    text: {
      color: colors.grey50,
    },
    inputStyle: {
      width: 350,
    },
    smallMarginBottom: {
      marginBottom: theme.spacing.s,
    },
    largeMarginBottom: {
      marginBottom: theme.spacing.xl,
    },
    //Main login screen
    viewContainer: {
      paddingTop: theme.spacing.m,
      height: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    loginButtonContainer: {
      padding: theme.spacing.m,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

export default createStyles;
