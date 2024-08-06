import React, {useEffect} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import {
  faHeart,
  faLaughSquint,
  faLightbulb,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';

import {Text} from '../Text/text';

import createStyles from '../PostItem/PostItem.styles';

const LikeOptions = ({
  closeLiked,
  setLiked,
  animatedValues,
}: {
  closeLiked: (value: boolean) => void;
  setLiked: (value: boolean) => void;
  animatedValues: {
    animatedPosition: any;
    animatedOpacity: any;
  };
}) => {
  const styles = useThemedStyles(createStyles);

  useEffect(() => {
    Animated.timing(animatedValues.animatedPosition, {
      toValue: 40,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedValues.animatedOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.LikedOptionsPillContainer}>
      <Animated.View
        style={[
          styles.LikedOptionsPillAnimatedContainer,
          {
            opacity: animatedValues.animatedOpacity,
            bottom: animatedValues.animatedPosition,
          },
        ]}>
        <FontAwesomeIcon icon={faThumbsUp} color={colors.blue} />
        <FontAwesomeIcon icon={faHeart} color={colors.criticalRed} />
        {/* {/* <FontAwesomeIcon icon={} /> */}
        <FontAwesomeIcon
          icon={faLaughSquint}
          secondaryColor={colors.black}
          color={colors.yellow}
        />
        <FontAwesomeIcon icon={faLightbulb} />
      </Animated.View>
      <TouchableWithoutFeedback onPressOut={() => closeLiked(false)}>
        <Text textStyle={styles.LikedOptionsPillText} text=" Tap to cancel" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LikeOptions;
