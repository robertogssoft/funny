import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {claro, obscuro} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Button({name, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={name} color={obscuro} size={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: claro,
    height: 50,
    width: 50,
    paddingHorizontal: 4,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 90,
    marginHorizontal: 5,
  },
});
