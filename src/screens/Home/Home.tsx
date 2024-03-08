import React, {useRef, useState} from 'react';
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
import colors from '@DevEx/utils/styles/palette/colors';
import theme from '@DevEx/utils/styles/theme';
import {THomeScreenDataItem} from '@DevEx/utils/types/types';

import createStyles from './Home.styles';

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  const {isLoading, data: HomeData, isError, refetch, error} = useGetPosts();

  const [loading, setLoading] = useState<boolean>(isLoading);

  const loadingRotate = useRef(new Animated.Value(0)).current;

  const onRefetch = () => {
    // TODO: create logging for how many times it has been refteched
    // setPullDownHeight(0);
    setLoading(true);
    setTimeout(async () => {
      await refetch();
      setLoading(false);
    }, 5000);
  };

  const ifCloseToTop = (nativeEvent: NativeScrollEvent) => {
    return nativeEvent.contentOffset.y <= 0;
  };

  if (isError || error || (HomeData === undefined && !isLoading)) {
    return (
      <SafeAreaView edges={['left', 'right']}>
        <Text text={'An Error occured, please try again'} />
      </SafeAreaView>
    );
  }

  if (HomeData === undefined || user === undefined) {
    return (
      <SafeAreaView edges={['left', 'right']}>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      {!loading && (
        <View
          style={{
            position: 'absolute',
            zIndex: -1,
            backgroundColor: 'red',
            height: 100,
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            textStyle={{textAlign: 'center'}}
            text={'Pull down to reload'}
          />
        </View>
      )}
      <ScrollView
        // style={{paddingTop: loading ? 100 : 0}}
        scrollEventThrottle={16}
        onScroll={({nativeEvent}) => {
          console.log(nativeEvent.contentOffset);
          if (nativeEvent.contentOffset.y <= -50 && !loading) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 5000);
          }
          if (loading && nativeEvent.contentOffset.y >= 100) {
            setLoading(false);
          }
        }}>
        <View
          style={{
            display: !loading ? 'none' : 'flex',
            zIndex: -1,
            backgroundColor: 'red',
            height: 100,
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <LoadingSpinner />
        </View>

        <View
          style={{
            zIndex: 1,
            marginBottom: theme.spacing.xxs,
            padding: 10,
            backgroundColor: colors.grey2,
          }}>
          <Image
            source={require('@DevEx/assets/me.jpg')}
            style={{width: 50, height: 50, borderRadius: 50}}
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
