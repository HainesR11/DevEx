import React from 'react';
import {ScrollView, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView edges={[]} style={style}>
      <ModalHeader isFirstScreen={isFirstScreen} />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWithHeader;
