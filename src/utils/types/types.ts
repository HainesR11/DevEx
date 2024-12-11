import {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconDefinition, IconProp} from '@fortawesome/fontawesome-svg-core';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ACCOUNT_DETAILS,
  ACCOUNT_MANAGEMENT,
  ACCOUNT_NAVIGATOR,
  ADD_POST_SCREEN,
  CHAT_NAVIGATOR,
  COMMENT_SCREEN,
  COMMUNITIES_NAVIGATOR,
  DEBUG_SCREEN,
  FRIENDS_NAVIGATOR,
  HOME_NAVIGATOR,
  HOME_SCREEN,
  MESSAGES_NAVIGATOR,
  MESSAGES_SCREEN_HOME,
  MESSAGES_SCREEN_MESSAGE,
  NOTIFICATION_SCREEN,
  OPTIONS_SCREEN,
  SEARCH_NAVIGATOR,
  SEARCH_SCREEN,
  TAB_NAVIGATOR,
} from '@DevEx/constants/screenNames';

export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};

export type TInputProps = {
  placeholder: string;
  onChange: (e: string) => void;
  style?: TextStyle;
};

export type TIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
};

export type TEmailIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
  valid: boolean | undefined;
  isLoading: boolean;
  value?: string;
};

export type THomeNagigatorProps = {
  [HOME_SCREEN]: undefined;
  [NOTIFICATION_SCREEN]: undefined;
};

export type TRootNavigationProps = {
  //Navigators
  [TAB_NAVIGATOR]: undefined;
  [ACCOUNT_NAVIGATOR]: undefined;
  [HOME_NAVIGATOR]: undefined;
  [CHAT_NAVIGATOR]: undefined;
  [COMMUNITIES_NAVIGATOR]: undefined;
  [FRIENDS_NAVIGATOR]: undefined;
  [SEARCH_NAVIGATOR]: undefined;
  [MESSAGES_NAVIGATOR]: undefined;

  //Screens
  [ACCOUNT_DETAILS]: undefined;
  [ACCOUNT_MANAGEMENT]: undefined;
  [ADD_POST_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  ChatScreen: undefined;
  ComminityScreen: undefined;
  [SEARCH_SCREEN]: undefined;
  [DEBUG_SCREEN]: undefined;
  [COMMENT_SCREEN]: {id: string; interaction: 'Comments' | 'Share' | 'Likes'};
  [OPTIONS_SCREEN]: {options: TOptions[]};
  [MESSAGES_SCREEN_HOME]: undefined;
  [MESSAGES_SCREEN_MESSAGE]: {id: string};
  [NOTIFICATION_SCREEN]: undefined;
};

export type TAccountManagement = {
  [ACCOUNT_DETAILS]: undefined;
  [DEBUG_SCREEN]: undefined;
};

type TUser = {id: number; Name: string; profilePic?: string};

export type TUserInfo = {
  id: number;
  name: string;
  username: string;
  profilePic: string;
  email: string;
  following: TUser[];
  followers: TUser[];
};

export type TNavigationProps = StackNavigationProp<TRootNavigationProps>;

type TPostItemUser = {
  name: string;
  image: any;
  username: string;
};

type TCommentItem = {
  user: TPostItemUser;
  data: string;
};

export type THomeScreenDataItem = {
  id: string;
  user: TPostItemUser;
  data: {content: string; image?: unknown};
  likes: {name?: string; username: string; image?: string}[];
  comments: TCommentItem[];
};

export type TOptions = {
  name: string;
  icon: IconDefinition;
  onPress: () => void;
  color?: string;
  iconSize?: number;
};

export type TButtonProps = {
  styles?: any;
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  type?: 'Primary' | 'Secondary';
  disabled?: boolean;
};

export type THeaderProps = {
  isHomeScreen?: boolean;
  title?: string;
};

export interface IconProps {
  viewStyle?: StyleProp<ViewStyle>;
  size: number;
  color: string;
  testID?: string;
}

export interface IconsProps {
  Icon: FC<IconProps> | IconDefinition;
  size?: number;
  state?: IconState;
  viewStyle?: StyleProp<ViewStyle>;
  testId?: string;
  isScalable?: boolean;
}

export const IconStateNames = [
  'default',
  'selected',
  'positive',
  'negative',
  'activeTab',
  'inactiveTab',
  'error',
] as const;

export type IconState = (typeof IconStateNames)[number];
