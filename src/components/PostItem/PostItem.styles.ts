import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //PostItem
    PostItemContainer: {
      paddingVertical: theme.spacing.m,
      paddingHorizontal: theme.spacing.s,
      backgroundColor: theme.colors.grey2,
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
      marginLeft: theme.spacing.xs,
    },
    PostItemUsername: {
      color: theme.colors.grey50,
    },
    PostItemCommentInfo: {
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.m,
    },
    PostItemShareInfo: {
      width: 120,
      justifyContent: 'space-around',
    },
    PostItemShareItem: {
      marginHorizontal: theme.spacing.s,
      justifyContent: 'space-around',
    },

    //Liked Options Pill
    LikedOptionsPillContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      borderTopColor: theme.colors.grey10,
      borderTopWidth: 0.5,
    },
    LikedOptionsPillAnimatedContainer: {
      alignContent: 'center',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      backgroundColor: theme.colors.white,
      width: '50%',
      padding: 10,
      shadowColor: theme.colors.grey20,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      borderRadius: 20,
    },
  });
export default createStyles;
