import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import LoadingSpinner from '@DevEx/components/loadingSpinner/loadingSpinner';
import PostItem from '@DevEx/components/PostItem/PostItem';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {HomeScreenData} from '@DevEx/test/stubs';
import {RootState} from '@DevEx/utils/store/store';
import {THomeScreenDataItem} from '@DevEx/utils/types/types';

import createStyles from './Home.styles';

const Home = () => {
  const styles = useThemedStyles(createStyles);
  const user = useSelector((state: RootState) => state.user);

  if (user === undefined) {
    return (
      <SafeAreaView>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView style={styles.HomeScrollView}>
        {HomeScreenData.map((item: THomeScreenDataItem, index) => {
          return <PostItem key={index} item={item} user={user.user} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
