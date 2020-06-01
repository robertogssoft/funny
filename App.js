import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Keyboard from './src/containers/keyboard';
import Input from './src/components/input';
import Buttons from './src/containers/buttons';
import { ValueProvider } from './src/context/ValueContext';
import { claro } from './src/assets/styles';
import Output from './src/components/output';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={claro} barStyle="dark-content" />
      <ValueProvider>
        <Output/>
        <Buttons buttonsToShow={['record','delete']} />
        <Input />
        <Buttons buttonsToShow={['play']} />
        <Keyboard />
      </ValueProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: claro,
  },
  row: {
    flexDirection: 'row',
  },
});
