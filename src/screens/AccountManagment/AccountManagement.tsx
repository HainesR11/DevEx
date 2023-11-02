import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {GradientText, Text} from '@DevEx/components';
import {ACCOUNT_DETAILS, DEBUG_SCREEN} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {
  TAccountManagement,
  TRootNavigationProps,
} from '@DevEx/utils/types/types';

import createStyles from './AccountManagement.styles';

type TAccountManagementItem = {
  title: string;
  screenName: keyof TAccountManagement;
};

type TNavigationProps = StackNavigationProp<TRootNavigationProps>;

const AccountManagementItem = ({title, screenName}: TAccountManagementItem) => {
  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.AccountItemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Text textStyle={styles.AccountItemText} text={title} />
      </TouchableOpacity>
    </View>
  );
};

const AccountManagement = () => {
  const data = [
    {
      title: 'Account Details',
      screenName: ACCOUNT_DETAILS,
      rules: [],
    },
    {
      title: 'Debug',
      screenName: DEBUG_SCREEN,
      rules: [__DEV__],
    },
  ];

  const filteredActions = data.filter(item => {
    return item.rules.every(rule => rule === true);
  });

  const {user} = useSelector((state: RootState) => state.user);

  const styles = useThemedStyles(createStyles);

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image
          source={require('@DevEx/assets/me.jpg')}
          style={styles.AccountManagementImage}
        />
        <View>
          <GradientText
            bold
            gradientStyle="devexMainGradient"
            textStyle={styles.gradientHeaderText}
            text={user.Name}
          />
          <Text textStyle={styles.headerText} text={user.Email} />
        </View>
      </View>
      {filteredActions.map(({title, screenName}, index) => {
        return (
          <AccountManagementItem
            key={index}
            title={title}
            screenName={screenName}
          />
        );
      })}
    </SafeAreaView>
  );
};
export default AccountManagement;
