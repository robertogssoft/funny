import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {obscuro, primary} from '../assets/styles';
import {ValueContext} from '../context/ValueContext';

export default function Input() {
  const {value} = useContext(ValueContext);

  if (Text.defaultProps == null) {
    Text.defaultProps = {};
  }

  Text.defaultProps.allowFontScaling = false;

  return <Text style={styles.container}>{value}</Text>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    width: '95%',
    flex: 1,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    fontSize: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
