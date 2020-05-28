import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {obscuro, primary} from '../assets/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ValueContext} from '../context/ValueContext';

export default function Space({icon, onPress}) {
  const {add} = useContext(ValueContext);

  return (
    <TouchableOpacity style={styles.container} onPress={() => add(' ')}>
      <Text style={styles.space}>FGHService</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: obscuro,
    width: wp(80),
    height: wp(13),
    justifyContent: 'flex-end',
    paddingBottom: 5,
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
  space: {
    fontSize: 7,
    color: primary,
  },
});
