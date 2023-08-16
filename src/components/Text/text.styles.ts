import { Theme } from '@DevEx/utils/styles/theme';
import { StyleSheet } from 'react-native';


const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: theme.spacing.s,
    },
    transparent: {
      opacity: 0,
      backgroundColor: 'transparent',
    },
    transparentBgr: {
      backgroundColor: 'transparent',
    },
    center: {
      alignItems: 'center',
      textAlign: 'center',
    },
    left: {
      alignItems: 'flex-start',
      textAlign: 'left',
    },
    right: {
      alignItems: 'flex-end',
      textAlign: 'right',
    },
  });

export default createStyles;
