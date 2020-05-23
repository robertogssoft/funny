import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {claro, obscuro} from '../assets/styles';

export default function App() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>A</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: claro,
    height: 30,
    paddingHorizontal: 4,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: obscuro,
    fontWeight: 'bold',
  },
});
