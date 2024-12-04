import React, {FC} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {IconProps} from '@DevEx/utils/types/types';

import Icon from '../Icon/Icon';

import createStyles from './NotificationIcon.styles';
import {Text} from '../Text/text';

type TNotificationIconProps = {
  type?: 'Primary' | 'Numbered';
  count: number;
  icon: IconDefinition | FC<IconProps>;
  onPress?: () => void;
  size?: number;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  dotStyle?: ViewStyle;
};

const NotificationIcon = ({
  type = 'Primary',
  count,
  icon,
  onPress,
  size,
  containerStyle,
  iconStyle,
  dotStyle,
}: TNotificationIconProps) => {
  const style = useThemedStyles(createStyles);

  if (type === 'Numbered') {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        {count > 0 && (
          <View style={[style.notificationNumberedDot, dotStyle]}>
            <Text textStyle={style.numberText} size={10} bold text={count} />
          </View>
        )}
        <Icon Icon={icon} viewStyle={iconStyle} size={size} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      {count > 0 && <View style={[style.notificationDot, dotStyle]} />}
      <Icon Icon={icon} viewStyle={iconStyle} size={size} />
    </TouchableOpacity>
  );
};

export default NotificationIcon;
