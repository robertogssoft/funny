import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './src/components/buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
