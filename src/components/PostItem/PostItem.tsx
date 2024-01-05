import React, {useState} from 'react';
import {Image, Share, TouchableOpacity, View} from 'react-native';
import {
  faBookmark,
  faShare,
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

const PostItem = ({
  item,
  user,
}: {
  item: THomeScreenDataItem;
  user?: TUserInfo;
}) => {
  const styles = useThemedStyles(createStyles);
  const navigation = useNavigation<TNavigationProps>();

  const [likedLength, setLikedLength] = useState(item.likes.length);
  const [saved, setSaved] = useState<boolean>(false);

  const [liked, setLiked] = useState<Boolean>(
    item.likes.some(test => test.username === user?.username),
  );

  return (
    <>
      <View style={styles.PostItemContainer}>
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
          <TouchableOpacity
            //TODO: Add header + text property to item.data istead of just base string
            onPress={() =>
              navigation.navigate(COMMENT_SCREEN, {
                id: item.id,
                interaction: 'Comments',
              })
            }>
            <Text
              textStyle={styles.PostItemUsername}
              text={`${item.comments.length} comments`}
            />
          </TouchableOpacity>
          <View style={[styles.PostItemShareInfo, styles.PostItemCenter]}>
            <TouchableOpacity
              onPress={() => {
                setLikedLength(liked ? likedLength - 1 : likedLength + 1);
                setLiked(!liked);
              }}
              style={[styles.PostItemShareItem, styles.PostItemCenter]}>
              <Text text={likedLength} />
              <FontAwesomeIcon
                color={liked ? colors.green : colors.grey50}
                icon={faThumbsUp}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSaved(!saved)}
              style={[
                styles.PostItemShareItem,
                styles.PostItemCenter,
                styles.marginLeft,
              ]}>
              <FontAwesomeIcon
                color={saved ? colors.grey80 : colors.grey50}
                icon={faBookmark}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // TODO: create share page (to followers)
              onPress={() => Share.share({message: item.data})}
              style={[styles.PostItemShareItem, styles.PostItemCenter]}>
              <FontAwesomeIcon color={colors.grey50} icon={faShare} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default PostItem;
