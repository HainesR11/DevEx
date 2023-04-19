import {createTheme} from '@shopify/restyle';

import colors from './palette/colors';
import padding from './spacing/padding';

export const gradients = {
  skyPrimaryGradient: ['#FF9E00', '#FF0000', '#B5007D', '#21429C', '#0071FF'],
  skyErrorGradient: ['#C40000', '#C40000'],
  tvPrimaryGradient: ['#000FF5', '#00D2FF'],
  bbPrimaryGradient: ['#FF00A5', '#6E00FF'],
  vipSilverGradient: ['#708186', '#A1ACB2'],
  vipGoldGradient: ['#C88B2E', '#E6BB63'],
  vipPlatinumGradient: ['#6E6C89', '#8D8DBE'],
  vipDiamondGradient: ['#191919', '#474747'],
  mobilePrimaryGradient: ['#FF6400', '#FF0A50', '#FF00A5'],
  productPrimaryGradient: ['#21429C', '#B5007D'],
  greyGradientStripe: ['#C4C4C400', '#F9F9F9', '#C4C4C400'],
  greyGradient: ['#C4C4C4ff', '#00000000'],
  primaryButton: ['rgba(0, 15, 245, 0.8)', 'rgba(0, 15, 245, 1)'],
  primaryDisabledButton: ['rgba(74, 74, 74, 0.8)', 'rgba(74, 74, 74, 1)'],
  mobilePrimary: ['#FF6400', '#FF00A5'],
  broadbandPrimary: ['#FF00A5', '#6E00FF'],
  skySpinnerGradient: [
    '#C4C4C4',
    '#FF9E00',
    '#FF0000',
    '#B5007D',
    '#21429C',
    '#0071FF',
  ],
  skySpinnerNonGradientPrimary: ['#FFF', '#FFF', '#FFF', '#FFFFFF00'],
  skySpinnerNonGradientSecondary: [
    '#000FF5',
    '#000FF5',
    '#000FF5',
    '#000FF500',
  ],
  none: ['#fafafa', '#fafafa'],
  broadbandDowntime: ['#1F232E', '#3D4D79'],
  skyProtect: ['#E6222D', '#FF5C00', '#EA4F31', '#F08125', '#F3901A'],
};

const theme = createTheme({
  colors: {
    mainBackground: colors.white,
    mainForeground: colors.black,
    cardPrimaryBackground: colors.white,
    buttonPrimaryBackground: colors.purplePrimary,
    modalBackground: colors.grey2,
    inactiveTab: colors.grey40,
    activeTab: colors.primaryDark,
    focusedInputHighlight: colors.purplePrimary,
    carouselCount: colors.grey50,
    carouselFallback: colors.grey50,
    action: colors.action,
    positive: colors.positive,
    negative: colors.negative,
    listDivider: colors.grey20,
    white: colors.white,
    cardBorderColor: colors.grey5,
    avatarBackground: colors.grey2,
    grey2: colors.grey2,
    grey5: colors.grey5,
    grey10: colors.grey10,
    grey20: colors.grey20,
    grey50: colors.grey50,
    grey70: colors.grey70,
    errorDark: colors.errorDark,
    rewardsOrange: colors.orange,
    informationTileBackground: colors.grey10,
    primaryNumber: colors.blue,
    vipGold: gradients.vipGoldGradient[0],
    vipSilver: gradients.vipSilverGradient[0],
    vipPlatinum: gradients.vipPlatinumGradient[0],
    vipDiamond: gradients.vipDiamondGradient[0],
    //XFI
    passwordGrey: colors.grey80,
    passwordWeak: colors.passwordWeak,
    passwordMedium: colors.passwordMedium,
    passwordStrong: colors.passwordStrong,
    translucentDark: colors.translucentDark,
    translucentWhite: colors.translucentWhite,
    iconPrimary: colors.iconPrimary,
    positiveTickColor: colors.positive,
    deviceOnline: colors.deviceOnline,
    deviceOffline: colors.grey50,
    groupsBackground: colors.grey2,
  },
  spacing: {
    ...padding,
    tabBarOffset: 80,
  },
  breakpoints: {},
  buttons: {
    primary: {
      background: colors.blue,
      foreground: colors.white,
    },
    secondary: {
      background: colors.white,
      foreground: colors.blue,
    },
    disabled: {
      background: colors.grey20,
      foreground: colors.white,
    },
    danger: {
      background: colors.errorDark,
      foreground: colors.errorDark,
    },
    basic: {
      selected: {border: colors.blue},
      unselected: {border: colors.grey20},
    },
  },
  form: {
    outlinedTextInput: {
      outlineWidth: 1,
      outlineGap: 2,
      outlineRadius: 5,
      focusedOutlineTopOffset: 5,
      focusedOutlineRadius: 7,
    },
    radioList: {
      indicator: {
        width: 30,
        innerWidth: 20,
        borderWidth: 2,
        selectedColor: colors.purplePrimary,
        unselectedColor: colors.grey20,
      },
    },
    toggle: {
      active: colors.blue,
      inactive: colors.grey20,
      switch: colors.white,
      size: {
        switch: {width: 24, positionOffset: 20},
        container: {height: 26, width: 46, radius: 40},
      },
    },
  },
  screens: {
    insetBottom: padding.xl,
    marginHorizontal: padding.l,
    marginTop: padding.m,
  },
  notification: {
    accentColor: colors.blue,
    activeDot: colors.primaryDark,
  },
});

export type Theme = typeof theme;
export default theme;
