import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const LoadingSpinner = () => {
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
      {/* <Image source={spinner} style={{height: 30, width: 30}} /> */}
      <Svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        transform={[{rotateZ: '300'}]}>
        <Path
          d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
          stroke="#ffffff"
          stroke-width="3.55556"
          stroke-linecap="round"
        />
      </Svg>
    </Animated.View>
  );
};
export default LoadingSpinner;
