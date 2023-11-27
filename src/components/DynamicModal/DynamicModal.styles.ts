import {StyleSheet} from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      minHeight: theme.spacing.l,
    },
    LineBreak: {
      width: '20%',
      borderBotttomWidth: 1,
      borderBottomColor: colors.grey60,
    },
    background: {
      flex: 1,
      flexDirection: 'column-reverse',
    },
    cover: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.translucentDark,
    },
    wrapper: {
      paddingHorizontal: theme.spacing.s,
      borderTopLeftRadius: theme.spacing.l,
      borderTopRightRadius: theme.spacing.l,
      backgroundColor: theme.colors.grey10,
    },
    content: {},
    headerBar: {
      alignSelf: 'center',
      marginTop: theme.spacing.sm,
      width: 100,
      borderRadius: theme.spacing.xs,
      height: theme.spacing.xs,
      backgroundColor: theme.colors.grey50,
    },
  });
export default createStyles;
