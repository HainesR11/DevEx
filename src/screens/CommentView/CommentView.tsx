import {faPlaystation} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

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
    <SafeAreaView>
      <View>
        <Text>Hello there</Text>
      </View>
    </SafeAreaView>
  );
};

export default CommentView;
