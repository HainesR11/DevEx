import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from '@DevEx/components/button';
import {Text} from '@DevEx/components/Text/text';
import useLogout from '@DevEx/utils/functions/useLogout/useLogout';

type TErrorLayout = {
  title?: string;
  onPress?: () => void;
  hasBody?: boolean;
};

const ErrorLayout = ({title, onPress, hasBody}: TErrorLayout) => {
  const logout = useLogout();
  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={{
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text text={title || 'hello there'} />
      <View style={{alignItems: 'center'}}>
        {onPress && (
          <Button type="Primary" onPress={onPress} title="Try Again" />
        )}
        <TouchableOpacity>
          <Text text="Log out" onPress={logout} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ErrorLayout;
