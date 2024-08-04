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
  faSave,
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
        <Text textStyle={{paddingTop: 10}} text=" Tap to cancel" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const PostItem = ({
  item,
  user,
  index,
  length, //? Used to cacluate the bottom of the documents
}: {
  item: THomeScreenDataItem;
  user?: TUserInfo;
  index: number;
  length: number;
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

  // if(Opptions) {
  // return(
  //   <DynamicModal/>
  // )
  // }

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
    <View
      style={{
        backgroundColor: colors.white,
        marginHorizontal: 15,
        borderRadius: 20,
        marginVertical: 7,
        paddingVertical: 10,
      }}>
      {/* -- Content --*/}
      {item.data.image ? (
        <View>
          <Image
            source={require('@DevEx/assets/Collaboration1.jpeg')}
            style={{
              maxHeight: 200,
              minHeight: 200,
              alignSelf: 'center',
              width: '90%',
              overflow: 'hidden',
              borderRadius: 13,
              resizeMode: 'cover',
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={{
              position: 'absolute',
              right: 30,
              top: 8,
            }}>
            <FontAwesomeIcon icon={faEllipsis} color={colors.white} size={25} />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 30,
              marginVertical: 10,
            }}>
            <Text text={item.data.content} />
          </View>
        </View>
      ) : (
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(OPTIONS_SCREEN, {
                options: postOptions,
              })
            }
            style={{
              width: '100%',
              // backgroundColor: 'red',
              flexDirection: 'row-reverse',
            }}>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <Animated.View
            style={{
              opacity: animatedProfileOpacity,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                maxHeight: 40,
                minHeight: 40,
                minWidth: 40,
                maxWidth: 40,
                borderRadius: 20,
              }}
              source={image}
            />
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text text={item.user.name} />
              <Text
                text={item.user.username}
                textStyle={{color: colors.grey50}}
              />
            </View>
          </Animated.View>
          <View
            style={{
              justifyContent: 'space-between',
              width: 100,
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onLongPress={openLikedOptions}
              onPress={() => onPressLiked()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: likedLength.toFixed().length >= 2 ? 37 : 30,
                justifyContent: 'space-between',
              }}>
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
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: item.comments.length.toFixed().length >= 2 ? 40 : 30,
                justifyContent: 'space-between',
              }}>
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
