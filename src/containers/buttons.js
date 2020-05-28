import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './../components/buttons';

export default function Buttons() {
  return (
    <View style={styles.row}>
      <Button name="volume-up" />
      <Button name="play" />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
