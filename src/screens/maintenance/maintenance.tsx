import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import createStyles from './maintenance.styles';
import {useThemedStyles} from '@DevEx/hooks/UseThemeStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGears} from '@fortawesome/free-solid-svg-icons';
import theme from '@DevEx/utils/styles/theme';

const Maintenance = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={faGears}
          size={150}
          style={{marginBottom: theme.spacing.m}}
        />
        <Text style={styles.header}>We are currently down for maintenance</Text>
        <Text style={styles.paragraph}>
          We will be back up and running shortly
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Maintenance;
