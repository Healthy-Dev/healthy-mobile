import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Button from '~/components/common/Button';
import { startBottomTabs } from '~/navigation';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Onboarding</Text>
      <Button title="Continuar" onPress={startBottomTabs()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
