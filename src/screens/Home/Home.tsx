import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  NativeScrollEvent,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {useGetPosts} from '@DevEx/api/Posts/useFetchPosts';
import {Text} from '@DevEx/components';
import LoadingSpinner from '@DevEx/components/layouts/loadingSpinner/loadingSpinner';
import PostItem from '@DevEx/components/PostItem/PostItem';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {THomeScreenDataItem} from '@DevEx/utils/types/types';

import RenderLoading from './utils/LoadingCard';

import createStyles from './Home.styles';

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  const {isLoading, data: HomeData, isError, refetch} = useGetPosts();

  console.log(HomeData);

  const [loading, setLoading] = useState<boolean>(isLoading);
  const [offset, setOffset] = useState<number>(0);

  const loadingHeight = useRef(new Animated.Value(0)).current;

  const onRefetch = () => {
    setOffset(70);
    // TODO: create logging for how many times it has been refetched
    setLoading(true);
    setTimeout(async () => {
      await refetch().then(() => {
        setLoading(false);
        setOffset(0);
      });
    }, 5000);
  };

  useEffect(() => {
    Animated.timing(loadingHeight, {
      toValue: offset ?? 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [loadingHeight, offset]);

  const offsetCase = (nativeEvent: NativeScrollEvent) => {
    switch (true) {
      case ifCloseToTop(nativeEvent) && !loading:
        if (nativeEvent.contentOffset.y <= -70) {
          onRefetch();
        }
        if (nativeEvent.contentOffset.y >= -70) {
          setOffset(-nativeEvent.contentOffset.y.toFixed());
        }
        break;
      case loading && nativeEvent.contentOffset.y >= 70:
        setOffset(0);
        setLoading(false);
        break;
    }
  };

  const ifCloseToTop = (nativeEvent: NativeScrollEvent) => {
    return nativeEvent.contentOffset.y <= 0;
  };
  if (HomeData === undefined || user === undefined) {
    return (
      <SafeAreaView style={{alignItems: 'center'}} edges={[]}>
        <RenderLoading count={5} />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView edges={['left', 'right']}>
        <Text text={'An Error occured, please try again'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      <Animated.View
        style={[
          styles.LoadingSpinnerContainer,
          {
            height: loadingHeight,
          },
        ]}>
        <LoadingSpinner currentPosition={offset} animate={loading} />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={({nativeEvent}) => offsetCase(nativeEvent)}>
        <View style={styles.updateContainer}>
          <Image
            source={require('@DevEx/assets/me.jpg')}
            style={styles.updateImage}
          />
          <TextInput
            placeholder="What on your mind?"
            multiline
            style={styles.updateInputBox}
          />
        </View>
        {HomeData.map((item: THomeScreenDataItem, index: number) => {
          return (
            <PostItem
              index={index}
              length={HomeData.length}
              key={index}
              item={item}
              user={user.user}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
