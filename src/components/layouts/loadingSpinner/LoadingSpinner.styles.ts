import {Theme} from '@DevEx/utils/styles/theme';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    spinnerItem: {
      backgroundColor: theme.colors.grey20,
      width: theme.spacing.m,
      height: theme.spacing.l,
    },
  });
export default createStyles;
