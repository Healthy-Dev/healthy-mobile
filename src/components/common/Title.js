import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default Title;
