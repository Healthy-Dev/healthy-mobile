import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Healthy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
