import React, {Dispatch, SetStateAction} from 'react';
import {Image, Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {LoadingSpinner} from '@DevEx/screens';
import {gradients} from '@DevEx/utils/styles/theme';

import createStyles from './ModalWithHeader.styles';

type TModalWithHeader = {
  children: React.ReactNode;
  inList?: boolean;
  isLoading?: boolean;
  testID: string;
  isFromDeeplink?: boolean;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Header = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.header}>
      <LinearGradient
        style={styles.gradientLine}
        colors={gradients.devexMainGradient}
      />
      <Image
        style={styles.image}
        source={require('@DevEx/assets/DevExIcon.png')}
      />
    </View>
  );
};

const ModalWithHeader = ({
  children,
  isLoading,
  isVisible,
  setVisible,
}: // isFromDeeplink = false,
// testID,
// ...rest
TModalWithHeader) => {
  const renderChildren = () => <>{children}</>;

  if (isLoading) {
    return <LoadingSpinner animating />;
  }

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => setVisible(!isVisible)}
      presentationStyle="pageSheet">
      <Header />
      {renderChildren()}
    </Modal>
  );
};

export default ModalWithHeader;
