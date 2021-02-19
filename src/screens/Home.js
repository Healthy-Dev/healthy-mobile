import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Colors } from '~/constants/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text>Healthy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
});

export default Home;
