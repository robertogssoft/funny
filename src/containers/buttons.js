import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';
import { ValueContext } from '../context/ValueContext';
import Button from '../components/button';
import Voice from '@react-native-community/voice';
import playSound from '../commonfunctions/playSound';
const audioIntro = require('../assets/sound/DiEscribir.mp3');
const audioEscribe = require('../assets/sound/AhoraEscribe.mp3');

export default function Buttons({ buttonsToShow }) {
  const { addOutput, value, deleteOutput } = useContext(ValueContext);
  const [reader, setReader] = useState('initiliazing');
  const [recording, setRecording] = useState(false);

  Voice.onSpeechStart = speechStart;
  Voice.onSpeechResults = speechResults;
  Voice.onSpeechError = speechError;
  Voice.onSpeechEnd = speechEnd;

  useEffect(() => {
    if (reader === 'initiliazing') {
      initTts();
    }
  }, [reader]);

  useEffect(() => {
    const processVoiceRecording = async () => {
      if (recording) {
        await Voice.start('es-MX');
      } else if (Voice.isRecognizing()) {
        await Voice.stop();
      }
    }
    processVoiceRecording();
  }, [recording])

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

  const recordVoice = async () => {
    if (!recording) {
      playSound(audioIntro);
      await sleep(4600);
    }
    setRecording(!recording);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function speechStart(event) {
  }

  function speechResults(event) {
    if (event.value && event.value.length > 0) {
      addOutput(event.value[0]);
    }
  }

  function speechError(event) {
    console.log(event);
  }

  async function speechEnd(event) {
    setRecording(false);
    await sleep(1000);
    playSound(audioEscribe);
  }

  //<Button name="volume-up" onPress={() => console.log('volume')} />

  return (
    <View style={styles.row}>
      {
        buttonsToShow.includes('play') ?
          <Button name="play" onPress={play} />
          :
          <View />
      }
      {
        buttonsToShow.includes('record') ?
          <Button name={recording ? 'stop' : 'microphone'} onPress={recordVoice} />
          :
          <View />
      }
      {
        buttonsToShow.includes('delete') ?
          <Button name='trash' onPress={deleteOutput} />
          :
          <View />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
