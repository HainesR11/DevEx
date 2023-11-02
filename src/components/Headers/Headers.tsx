import React from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ACCOUNT_NAVIGATOR,
  SEARCH_NAVIGATOR,
} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

import createStyles from './Header.styles';

type TNavigationProps = StackNavigationProp<TRootNavigationProps>;

export const HomeHeader = () => {
  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);
  return (
    <SafeAreaView style={styles.container}>
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
