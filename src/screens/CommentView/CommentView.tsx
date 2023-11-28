import React, {FC} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Text} from '@DevEx/components';
import DynamicModal from '@DevEx/components/DynamicModal/DynamicModal';
import CommentItem from '@DevEx/components/PostItem/CommentItem';
import {HomeScreenData} from '@DevEx/test/stubs';

interface ICommentView {
  route?: {
    key: string;
    name: string;
    path?: string;
    params: {id: string; title: string};
  };
}

const CommentView: FC<ICommentView> = ({route}) => {
  const routeParams = route?.params;
  console.log(routeParams);
  const item = HomeScreenData[1];
  // TODO: create call to back end to get information about Comment
  return (
    <DynamicModal
      testID="dynamic-modal-comments"
      header={() => (
        <View style={{alignItems: 'center'}}>
          <Text text={'Header'} />
        </View>
      )}>
      <ScrollView style={{width: '100%'}}>
        <Text text={'Scroll view here'} />
      </ScrollView>
    </DynamicModal>
  );
};

export default CommentView;

// <View>
//         <CommentItem item={item} />
//       </View>
//       <View>
//       </View>
//     </DynamicModal>
