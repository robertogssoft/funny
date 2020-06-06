import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {primary, obscuro} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ValueContext} from './../context/ValueContext';

export default function Configs() {
  const {toolTalk} = useContext(ValueContext);

  return (
    <View style={styles.container}>
      {toolTalk ? (
        <View style={styles.globo}>
          <TouchableOpacity style={styles.button}>
            <Icon name="microphone" color={obscuro} size={25} />
          </TouchableOpacity>
          <Text>¿Cómo se escribe?</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
  },
  globo: {
    marginTop: 10,
    backgroundColor: primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    borderTopLeftRadius: 15,
    minHeight: hp(5),
  },
  button: {
    paddingHorizontal: 5,
    borderColor: obscuro,
    borderStyle: 'solid',
    borderRightWidth: 1,
    marginRight: 3,
  },
});
