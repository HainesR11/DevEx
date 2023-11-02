import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import ModalHeader from '../ModalWithHeader/ModalHeader/ModalHeader';

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
