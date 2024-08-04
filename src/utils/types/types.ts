import {TextStyle} from 'react-native';
import {IconDefinition, IconProp} from '@fortawesome/fontawesome-svg-core';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ACCOUNT_DETAILS,
  ACCOUNT_MANAGEMENT,
  ACCOUNT_NAVIGATOR,
  COMMENT_SCREEN,
  DEBUG_SCREEN,
  HOME_NAVIGATOR,
  HOME_SCREEN,
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

export type TRootNavigationProps = {
  //Navigators
  [TAB_NAVIGATOR]: undefined;
  [ACCOUNT_NAVIGATOR]: undefined;
  [HOME_NAVIGATOR]: undefined;
  ChatNavigator: undefined;
  CommunitiesNavigator: undefined;
  [SEARCH_NAVIGATOR]: undefined;

  //Screens
  [ACCOUNT_DETAILS]: undefined;
  [ACCOUNT_MANAGEMENT]: undefined;
  [HOME_SCREEN]: undefined;
  ChatScreen: undefined;
  ComminityScreen: undefined;
  [SEARCH_SCREEN]: undefined;
  [DEBUG_SCREEN]: undefined;
  [COMMENT_SCREEN]: {id: string; interaction: 'Comments' | 'Share' | 'Likes'};
  [OPTIONS_SCREEN]: {options: TOptions[]};
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
