import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Tts from 'react-native-tts';
import {ValueContext} from '../context/ValueContext';
import Button from '../components/button';

export default function Buttons() {
  const {value, idioma} = useContext(ValueContext);
  const [reader, setReader] = useState('initiliazing');

  useEffect(() => {
    if (reader === 'initiliazing') {
      initTts();
    }
    if (idioma) {
      initTts();
    }
  }, [reader, idioma]);

  const initTts = async () => {
    try {
      await Tts.setDefaultLanguage(idioma);
    } catch (err) {
      //console.log('setDefaultLanguage error ', err);
    }
    setReader('initialized');
  };

  const play = async () => {
    if (reader === 'initialized') {
      Tts.stop();
      Tts.speak(value);
    }
  };

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
