import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {useGetPosts} from '@DevEx/api/Posts';
import LoadingSpinner from '@DevEx/components/layouts/loadingSpinner/loadingSpinner';
import PostItem from '@DevEx/components/PostItem/PostItem';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {RootState} from '@DevEx/utils/store/store';
import {THomeScreenDataItem} from '@DevEx/utils/types/types';

import createStyles from './Home.styles';

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  const {isLoading, data: HomeData} = useGetPosts();

  if (user === undefined || isLoading) {
    return (
      <SafeAreaView>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView style={styles.HomeScrollView}>
        {HomeData.map((item: THomeScreenDataItem, index: number) => {
          return <PostItem key={index} item={item} user={user.user} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
