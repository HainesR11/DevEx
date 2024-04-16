import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  NativeScrollEvent,
  ScrollView,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {useGetPosts} from '@DevEx/api/Posts';
import {Text} from '@DevEx/components';
import Breaker from '@DevEx/components/Breaker/Breaker';
import LoadingSpinner from '@DevEx/components/layouts/loadingSpinner/loadingSpinner';
import PostItem from '@DevEx/components/PostItem/PostItem';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {THomeScreenDataItem} from '@DevEx/utils/types/types';

import createStyles from './Home.styles';

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  const {isLoading, data: HomeData, isError, refetch} = useGetPosts();

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
        if (nativeEvent.contentOffset.y >= -50) {
          onRefetch();
        }
        if (nativeEvent.contentOffset.y <= -50) {
          setOffset(-nativeEvent.contentOffset.y.toFixed() * 4);
        }
        break;
      case loading && nativeEvent.contentOffset.y >= 50:
        setLoading(false);
        break;
    }
  };

  const ifCloseToTop = (nativeEvent: NativeScrollEvent) => {
    return nativeEvent.contentOffset.y <= 0;
  };

  if (isError || (HomeData === undefined && !isLoading)) {
    return (
      <SafeAreaView edges={['left', 'right']}>
        <Text text={'An Error occured, please try again'} />
      </SafeAreaView>
    );
  }

  if (HomeData === undefined || user === undefined) {
    return (
      <SafeAreaView
        style={styles.loadingSpinnerContainer}
        edges={['top', 'left', 'right']}>
        <LoadingSpinner animate currentPosition={100} />
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
        </View>
        <Breaker />
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
