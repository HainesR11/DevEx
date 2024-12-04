import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import colors from '@DevEx/utils/styles/palette/colors';
import theme from '@DevEx/utils/styles/theme';
import {IconsProps, IconState} from '@DevEx/utils/types/types';

const ThemedIcon: FC<IconsProps> = ({
  Icon,
  size = 15,
  state = 'default',
  testId,
  viewStyle,
}) => {
  const IconColors: {[key in IconState]: string} = {
    default: theme.colors.grey70,
    selected: colors.primaryBlue,
    positive: theme.colors.positive,
    negative: theme.colors.negative,
    activeTab: theme.colors.activeTab,
    inactiveTab: theme.colors.inactiveTab,
    error: theme.colors.errorDark,
  };

  if (typeof Icon === 'function') {
    return (
      <Icon
        color={IconColors[state] as string}
        size={size}
        testID={testId}
        viewStyle={viewStyle}
      />
    );
  }

  return (
    <FontAwesomeIcon
      size={size}
      icon={Icon}
      style={viewStyle || undefined}
      testID={testId}
      color={IconColors[state] as string}
    />
  );
};

export default ThemedIcon;
