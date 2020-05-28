import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './src/components/buttons';

import Keyboard from './src/containers/keyboard';
import Input from './src/components/input';
import {ValueProvider} from './src/context/ValueContext';

/*
<View style={styles.row}>
          <Button name="volume-up" />
          <Button name="play" />
        </View>
*/
export default function App() {
  return (
    <View style={styles.container}>
      <ValueProvider>
        <Input />
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
  },
  row: {
    flexDirection: 'row',
  },
});
