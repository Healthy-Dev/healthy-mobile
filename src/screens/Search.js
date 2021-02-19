import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Search;
