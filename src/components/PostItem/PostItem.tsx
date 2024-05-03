import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, Share, TouchableOpacity, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {
  faBookmark,
  faComment,
  faHeart,
  faLaughSquint,
  faLightbulb,
  faPaperPlane,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {COMMENT_SCREEN} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';
import {
  THomeScreenDataItem,
  TNavigationProps,
  TUserInfo,
} from '@DevEx/utils/types/types';

import {Text} from '../Text/text';

import createStyles from './PostItem.styles';

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
        <Text textStyle={{paddingTop: 10}} text=" Tap to cancel" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const PostItem = ({
  item,
  user,
  index,
  length,
}: {
  item: THomeScreenDataItem;
  user?: TUserInfo;
  index: number;
  length: number;
}) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation<TNavigationProps>();

  const [likedLength, setLikedLength] = useState(item.likes.length);
  const [likedType, setLikedType] = useState();
  const [saved, setSaved] = useState<boolean>(false);
  const [likeOptions, setLikeOptions] = useState<boolean>(false);

  const animatedPosition = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const [liked, setLiked] = useState(
    item.likes.some(likedItem => {
      return likedItem.username === user?.username;
    }),
  );

  const onPressLiked = () => {
    setLikedLength(liked ? likedLength - 1 : likedLength + 1);
    setLiked(!liked);
  };

  const closeLikedOptions = () => {
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start(({finished}) => {
      finished && setLikeOptions(false);
    });
  };

  return (
    <>
      <View
        onTouchStart={() => {
          likeOptions && closeLikedOptions();
        }}
        style={[
          styles.PostItemContainer,
          index !== length - 1 && styles.MarginBottom,
        ]}>
        <View style={[styles.PostItemUserContainer, styles.PostItemCenter]}>
          <Image
            source={require('@DevEx/assets/me.jpg')}
            style={styles.PostItemImage}
          />
          <View>
            <Text bold text={item.user.name} />
            <Text
              textStyle={styles.PostItemUsername}
              text={item.user.username}
            />
          </View>
        </View>
        <View style={styles.PostItemDataConatiner}>
          <Text text={item.data} />
        </View>
        <View style={[styles.PostItemCommentInfo, styles.PostItemCenter]}>
          {likeOptions ? (
            <LikeOptions
              closeLiked={closeLikedOptions}
              setLiked={closeLikedOptions}
              animatedValues={{animatedOpacity, animatedPosition}}
            />
          ) : (
            <>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 200,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => onPressLiked()}
                  onLongPress={() => setLikeOptions(true)}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{marginRight: 5}}
                    color={liked ? colors.blue : colors.grey40}
                  />
                  <Text text={`${likedLength} Likes`} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                  }}
                  onPress={() =>
                    navigation.navigate(COMMENT_SCREEN, {
                      id: item.id,
                      interaction: 'Comments',
                    })
                  }>
                  <FontAwesomeIcon
                    style={{marginRight: 5}}
                    icon={faComment}
                    color={colors.grey40}
                  />
                  <Text text={`${item.comments.length} Comments`} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 50,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(COMMENT_SCREEN, {
                      id: item.id,
                      interaction: 'Comments',
                    });
                  }}>
                  <FontAwesomeIcon icon={faPaperPlane} color={colors.grey40} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSaved(!saved);
                  }}>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    color={saved ? colors.grey70 : colors.grey40}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default PostItem;
