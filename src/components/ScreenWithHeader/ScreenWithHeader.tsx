import React from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';

import ModalHeader from '../ModalWithHeader/ModalHeader/ModalHeader';

type TScreenWithHeader = {
  children: React.ReactNode;
  isFirstScreen?: boolean;
  style?: ViewStyle;
};

const ScreenWithHeader = ({
  children,
  isFirstScreen,
  style,
}: TScreenWithHeader) => {
  return (
    <SafeAreaView style={style}>
      <ModalHeader isFirstScreen={isFirstScreen} />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWithHeader;
