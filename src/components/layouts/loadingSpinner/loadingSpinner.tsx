import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, View} from 'react-native';

import {Text} from '../../Text/text';

interface ILoadingSpinner {
  waitMessage?: boolean;
}

const LoadingSpinner = ({waitMessage}: ILoadingSpinner) => {
  const animatedRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedRef, {
        toValue: 1,
        duration: 1250,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }),
    ).start();
  });

  return (
    <View style={{alignItems: 'center'}}>
      {waitMessage && <Text bold text={'Please Wait'} />}
      <Animated.View
        style={[
          {
            transform: [
              {
                rotate: animatedRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}>
        <Image
          source={require('@DevEx/assets/LoadingSpinner.png')}
          style={{height: 30, width: 30}}
        />
      </Animated.View>
    </View>
  );
};
export default LoadingSpinner;
