import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  ShareContent,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  faShare,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Text} from '@DevEx/components';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {HomeScreenData} from '@DevEx/test/stubs';
import {RootState} from '@DevEx/utils/store/store';
import colors from '@DevEx/utils/styles/palette/colors';
import {TUserInfo} from '@DevEx/utils/types/types';

import createStyles from './Home.styles';

type TPostItemUser = {
  name: string;
  image: any;
  username: string;
};

type TCommentItem = {
  user: TPostItemUser;
  data: string;
};

type THomeScreenDataItem = {
  user: TPostItemUser;
  data: string;
  likes: string[];
  dislikes: string[];
  comments: TCommentItem[];
};

const PostItem = ({
  item,
  user,
}: {
  item: THomeScreenDataItem;
  user: TUserInfo;
}) => {
  console.log(user.username, '---Dislikes---');
  const styles = useThemedStyles(createStyles);

  const [likedLength, setLikedLength] = useState(item.likes.length);
  const [dislikedLength, setDislikedLength] = useState(item.dislikes.length);

  const [disliked, setDisliked] = useState<Boolean>(
    item.dislikes.includes('HainesR11'),
  );
  const [liked, setLiked] = useState<Boolean>(
    item.likes.includes(user.username),
  );

  return (
    <View style={styles.PostItemContainer}>
      <View style={[styles.PostItemUserContainer, styles.PostItemCenter]}>
        <Image
          source={require('@DevEx/assets/me.jpg')}
          style={styles.PostItemImage}
        />
        <View>
          <Text bold text={item.user.name} />
          <Text textStyle={styles.PostItemUsername} text={item.user.username} />
        </View>
      </View>
      <View style={styles.PostItemDataConatiner}>
        <Text text={item.data} />
      </View>
      <View style={[styles.PostItemCommentInfo, styles.PostItemCenter]}>
        <View>
          <Text
            textStyle={styles.PostItemUsername}
            text={`${item.comments.length} comments`}
          />
        </View>
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
            onPress={() => {
              setDislikedLength(
                disliked ? dislikedLength - 1 : dislikedLength + 1,
              );
              setDisliked(!disliked);
            }}
            style={[styles.PostItemShareItem, styles.PostItemCenter]}>
            <Text text={dislikedLength} />
            <FontAwesomeIcon
              color={disliked ? colors.red : colors.grey50}
              icon={faThumbsDown}
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
  );
};

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const {user} = useSelector((state: RootState) => state);

  return (
    <SafeAreaView style={styles.HomeScrollView}>
      <ScrollView>
        {HomeScreenData.map((item: THomeScreenDataItem, index) => {
          return <PostItem key={index} item={item} user={user.user} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
