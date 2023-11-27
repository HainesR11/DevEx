import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import isIOS from '@DevEx/utils/functions/isIOS/isIOS';
import {TNavigationProps, TRootNavigationProps} from '@DevEx/utils/types/types';

import {Text} from '../Text/text';

import createStyles from './DynamicModal.styles';

const DynamicModal = children => {
  const heightRef = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<TNavigationProps>();

  const styles = useThemedStyles(createStyles);

  useEffect(() => {
    Animated.timing(heightRef, {
      toValue: 559,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [heightRef]);

  const closeDynamicModal = () => {
    Animated.timing(heightRef, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => navigation.goBack());
  };

  const renderChildren = () =>
    typeof children === 'function' ? <>{children()}</> : <>{children}</>;

  const maxHeight = 500;

  const setHeight = (modalHeight: number) => {
    switch (true) {
      case modalHeight > 300 && modalHeight < 654:
        Animated.timing(heightRef, {
          toValue: 559,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
        break;
      case modalHeight <= 300:
        closeDynamicModal();
        break;
      default:
        Animated.timing(heightRef, {
          toValue: isIOS(869, 840),
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
    }
  };

  return (
    <View style={[styles.background]}>
      <Animated.View
        style={[
          styles.wrapper,
          {height: heightRef},
          // {
          //   transform: [{translateY: moveAnim}],
          // },
        ]}>
        <View
          testID="dynamic-height-modal-panel"
          style={{maxHeight}}
          // onLayout={onContentLayout}
        >
          <Animated.View
            testID="dynamic-height-modal-header"
            style={styles.header}
            // {...panResponder.panHandlers}
            // onLayout={onHeaderLayout}
            onTouchMove={e =>
              heightRef.setValue(isIOS(939, 850) - e.nativeEvent.pageY)
            }
            // onTouchMove={e => console.log(852 - e.nativeEvent.pageY)}
            onTouchEnd={e => setHeight(isIOS(939, 850) - e.nativeEvent.pageY)}>
            <View style={styles.headerBar} />
          </Animated.View>
          <View style={styles.header}>
            <Text text={'Header'} />
          </View>
          <View style={[styles.content]}>
            <Text text={'hello there'} />
          </View>
        </View>
        <View style={{height: 100, backgroundColor: 'red'}} />
      </Animated.View>
    </View>
  );
};

export default DynamicModal;
