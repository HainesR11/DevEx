import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {
  faBookmark,
  faCircleXmark,
  faComment,
  faEllipsis,
  faEyeSlash,
  faFlag,
  faHeart,
  faLaughSquint,
  faLightbulb,
  faShareFromSquare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

import {COMMENT_SCREEN, OPTIONS_SCREEN} from '@DevEx/constants/screenNames';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import colors from '@DevEx/utils/styles/palette/colors';
import {
  THomeScreenDataItem,
  TNavigationProps,
  TOptions,
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
        <Text textStyle={styles.LikedOptionsPillText} text=" Tap to cancel" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const PostItem = ({
  item,
  user,
  index,
}: // length, //? Used to cacluate the bottom of the documents
{
  item: THomeScreenDataItem;
  user?: TUserInfo;
  index: number;
  length?: number;
}) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation<TNavigationProps>();

  const [likeOptions, setLikeOptions] = useState<boolean>(false);
  const [liked, setLiked] = useState(
    item.likes.includes({username: user?.username || ''}),
  );
  const [likedLength, setLikedLength] = useState<number>(
    item.likes.length || 0,
  );
  const [saved, setSaved] = useState(false);

  const postOptions: TOptions[] = [
    {
      name: 'Save',
      icon: faBookmark,
      onPress: () => setSaved(!saved),
      color: colors.grey60,
    },
    {
      name: 'Share Via',
      icon: faShareFromSquare,
      onPress: () => {},
      color: colors.grey60,
      iconSize: 20,
    },
    {
      name: 'Not Interested',
      icon: faEyeSlash,
      onPress: () => {},
      color: colors.grey60,
    },
    {
      name: `Unfollow ${item.user.username}`,
      icon: faCircleXmark,
      onPress: () => {},
      color: colors.grey60,
    },
    {
      name: 'Report',
      icon: faFlag,
      onPress: () => {},
      color: colors.red,
    },
  ];

  const image = require('@DevEx/assets/me.jpg');

  const animatedPosition = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedProfileOpacity = useRef(new Animated.Value(1)).current;

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
      Animated.timing(animatedProfileOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  };

  const openLikedOptions = () => {
    Animated.timing(animatedProfileOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(({finished}) => {
      finished && setLikeOptions(true);
    });
  };

  return (
    <View style={styles.PostContainer} key={`PostItem-${index}`}>
      {/* -- Content --*/}
      {item.data.image ? (
        <View>
          <Image
            source={require('@DevEx/assets/Collaboration1.jpeg')}
            style={styles.PostItemImage}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={styles.PostItemImageOptionsContainer}>
            <FontAwesomeIcon icon={faEllipsis} color={colors.white} size={25} />
          </TouchableOpacity>
          <View style={styles.PostItemTextContainer}>
            <Text text={item.data.content} />
          </View>
        </View>
      ) : (
        <View style={styles.PostItemContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={styles.PostItemOptionsContainer}>
            <FontAwesomeIcon
              icon={faEllipsis}
              color={colors.grey60}
              size={25}
            />
          </TouchableOpacity>
          <Text text={item.data.content} />
        </View>
      )}

      {/* -- Use --*/}
      {likeOptions ? (
        <LikeOptions
          closeLiked={closeLikedOptions}
          setLiked={closeLikedOptions}
          animatedValues={{animatedOpacity, animatedPosition}}
        />
      ) : (
        <View style={styles.PostInfoStripContainer}>
          <Animated.View
            style={[
              styles.PostInfoUserContainer,
              {
                opacity: animatedProfileOpacity,
              },
            ]}>
            <Image style={styles.PostInfoStripImage} source={image} />
            <View style={styles.PostInfoUserTextContainer}>
              <Text text={item.user.name} />
              <Text
                text={item.user.username}
                textStyle={{color: colors.grey50}}
              />
            </View>
          </Animated.View>
          <View style={styles.PostInfoLikeContainer}>
            <TouchableOpacity
              onLongPress={openLikedOptions}
              onPress={() => onPressLiked()}
              style={[
                styles.PostInfoLikeButton,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: likedLength.toFixed().length >= 2 ? 37 : 30,
                },
              ]}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                color={liked ? colors.blue : colors.grey40}
              />
              <Text text={likedLength} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(COMMENT_SCREEN, {
                  id: item.id,
                  interaction: 'Comments',
                })
              }
              style={[
                styles.PostItemCommentContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: item.comments.length.toFixed().length >= 2 ? 40 : 30,
                },
              ]}>
              <FontAwesomeIcon icon={faComment} color={colors.grey40} />
              <Text text={item.comments.length} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default PostItem;
