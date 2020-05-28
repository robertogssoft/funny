import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {claro, obscuro} from '../assets/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Letter({icon, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} color={claro} size={wp(6)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: obscuro,
    width: wp(10),
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
});
