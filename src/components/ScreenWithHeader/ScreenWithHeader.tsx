import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import ModalHeader from '../ModalWithHeader/ModalHeader/ModalHeader';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootNavigationProps} from '@DevEx/utils/types/types';

type TScreenWithHeader = {
  children: React.ReactNode;
  isFirstScreen?: boolean;
};

const ScreenWithHeader = ({children, isFirstScreen}: TScreenWithHeader) => {
  return (
    <SafeAreaView>
      <ModalHeader isFirstScreen={isFirstScreen} />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWithHeader;
