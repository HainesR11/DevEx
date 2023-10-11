import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  faAngleLeft,
  faChevronCircleLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Text} from '@DevEx/components/Text/text';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';

import createStyles from './ModalHeader.styles';
import { useNavigation } from '@react-navigation/native';

type TModalHeader = {
  title?: string;
  onClose?: any;
  isFirstScreen?: any;
};

const ModalHeader = ({title, onClose, isFirstScreen = true }: TModalHeader) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation();

  const doGoBack = () => navigation.goBack();
  const doClose = () => {
    const parent = navigation.getParent();
    if (parent) {
      parent.goBack();
    } else {
      doGoBack();
    }
  };

  // const onCloseHandler = () => {
  //   onClose
  // }

  return (
    <View style={isFirstScreen ? styles.firstContainer : styles.Container}>
      {!isFirstScreen && (
        <TouchableOpacity onPress={() => doGoBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={20} />
        </TouchableOpacity>
      )}
      {title && <Text text={title} testId="ModalHeader-Title" />}
      <TouchableOpacity onPress={() => doClose()}>
        <FontAwesomeIcon icon={faXmark} size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default ModalHeader;
