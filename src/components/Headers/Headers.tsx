import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  faChevronLeft,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {
  ACCOUNT_NAVIGATOR,
  SEARCH_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {TNavigationProps} from '@DevEx/utils/types/types';

import {Text} from '../Text/text';

import createStyles from './Header.styles';

type THeaderProps = {
  isHomeScreen?: boolean;
  title?: {
    title?: string;
  };
};

export const HomeHeader = ({isHomeScreen = true, title}: THeaderProps) => {
  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);

  if (!isHomeScreen) {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
        <TouchableOpacity
          style={styles.chevron}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          textStyle={styles.title}
          text={title?.title as string}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.HomeScreenContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(ACCOUNT_NAVIGATOR)}>
        <FontAwesomeIcon icon={faUser} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('@DevEx/assets/DevExIcon.png')}
      />
      <TouchableOpacity onPress={() => navigation.navigate(SEARCH_NAVIGATOR)}>
        <FontAwesomeIcon icon={faSearch} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
