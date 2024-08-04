import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    PostItemShadowContainer: {
      shadowColor: theme.colors.grey70,
      shadowOffset: {width: 1, height: 6},
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 5,

      borderRadius: 10,
      width: '100%',
      height: '150%',
      position: 'absolute',
      zIndex: 0,
      backgroundColor: theme.colors.white,
    },

    PostItemContainer: {
      paddingVertical: 10,
      margin: 10,
      borderRadius: 10,
    },

    //Liked Options Pill
    LikedOptionsPillContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: theme.spacing['3.5xl'],
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
