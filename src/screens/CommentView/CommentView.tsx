import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CommentItem from '@DevEx/components/PostItem/CommentItem';
import {HomeScreenData} from '@DevEx/test/stubs';
import DynamicModal from '@DevEx/components/DynamicModal/DynamicModal';

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
  return <DynamicModal />;
};

export default CommentView;

// <View>
//         <CommentItem item={item} />
//       </View>
//       <View>
//         {item.comments.map(() => {
//           return <View></View>;
//         })}
//       </View>
//     </DynamicModal>
