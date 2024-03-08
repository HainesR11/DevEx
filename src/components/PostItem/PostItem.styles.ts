import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';
import colors from '@DevEx/utils/styles/palette/colors';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //PostItem
    PostItemContainer: {
      paddingVertical: theme.spacing.m,
      paddingHorizontal: theme.spacing.s,
      backgroundColor: colors.grey2,
    },
    MarginBottom: {
      marginBottom: 5,
    },
    PostItemDataConatiner: {
      marginVertical: theme.spacing.m,
      marginHorizontal: theme.spacing.sm,
    },
    marginLeft: {
      paddingLeft: theme.spacing.s,
    },
    PostItemCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    PostItemImage: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    PostItemUserContainer: {
      justifyContent: 'space-around',
      width: 150,
    },
    PostItemUsername: {
      color: theme.colors.grey50,
    },
    PostItemCommentInfo: {
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.sm,
    },
    PostItemShareInfo: {
      width: 120,
      justifyContent: 'space-around',
    },
    PostItemShareItem: {
      marginHorizontal: theme.spacing.s,
      width: 40,
      justifyContent: 'space-around',
    },
  });
export default createStyles;
