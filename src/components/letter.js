import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {claro, obscuro, primary} from '../assets/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Letter({l, onPress, tilde, onLongPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      {tilde ? <Text style={styles.tilde}>{tilde}</Text> : null}
      <Text style={styles.letra}>{l}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: claro,
    width: wp(9),
    height: wp(13),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  letra: {
    fontSize: wp(6),
  },
  tilde: {
    position: 'absolute',
    top: 2,
    right: 2,
    fontSize: wp(4),
    color: primary,
  },
});
