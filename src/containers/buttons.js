import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/button';

export default function Buttons() {
  return (
    <View style={styles.row}>
      <Button name="volume-up" onPress={() => console.log('volume')} />
      <Button name="play" onPress={() => console.log('play')} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
