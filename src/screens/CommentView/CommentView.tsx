import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {faPlaystation} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
  // TODO: create call to back end to get information about Comment
  return (
    <SafeAreaView edges={[]}>
      <View>
        <Text>Hello there</Text>
      </View>
    </SafeAreaView>
  );
};

export default CommentView;
