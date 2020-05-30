import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Tts from 'react-native-tts';
import {ValueContext} from '../context/ValueContext';
import Button from '../components/button';

export default function Buttons() {
  const {value} = useContext(ValueContext);
  const [reader, setReader] = useState('initiliazing');

  useEffect(() => {
    if (reader === 'initiliazing') {
      initTts();
    }
  }, [reader]);

  const initTts = async () => {
    //const voices = await Tts.voices();
    //console.log(voices);
    //if (voices && voices.length > 0) {
    try {
      await Tts.setDefaultLanguage('es-MX');
    } catch (err) {
      //console.log('setDefaultLanguage error ', err);
    }
    setReader('initialized');
    //}
  };

  const play = async () => {
    if (reader === 'initialized') {
      Tts.stop();
      Tts.speak(value);
    }
  };

  //<Button name="volume-up" onPress={() => console.log('volume')} />

  return (
    <View style={styles.row}>
      <Button name="play" onPress={play} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
