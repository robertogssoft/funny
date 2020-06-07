import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {primary, obscuro} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ValueContext} from './../context/ValueContext';

import Voice from '@react-native-community/voice';
import playSound from '../commonfunctions/playSound';
const audioIntro = require('../assets/sound/DiEscribir.mp3');
const audioEscribe = require('../assets/sound/AhoraEscribe.mp3');

export default function Configs() {
  const {toolTalk} = useContext(ValueContext);
  const [recording, setRecording] = useState(false);
  const [texto, setTexto] = useState('');

  Voice.onSpeechStart = speechStart;
  Voice.onSpeechResults = speechResults;
  Voice.onSpeechError = speechError;
  Voice.onSpeechEnd = speechEnd;

  useEffect(() => {
    const processVoiceRecording = async () => {
      if (recording) {
        await Voice.start('es-MX');
      } else if (Voice.isRecognizing()) {
        await Voice.stop();
      }
    };
    processVoiceRecording();
  }, [recording]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const recordVoice = async () => {
    if (!recording) {
      playSound(audioIntro);
      await sleep(4600);
    }
    setRecording(!recording);
  };

  function speechStart(event) {}

  function speechResults(event) {
    if (event.value && event.value.length > 0) {
      setTexto(event.value[0]);
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

  return (
    <View style={styles.container}>
      {toolTalk ? (
        <View style={styles.globo}>
          <TouchableOpacity style={styles.button} onPress={recordVoice}>
            <Icon
              name={recording ? 'stop' : 'microphone'}
              color={recording ? 'red' : obscuro}
              size={recording ? 35 : 25}
            />
          </TouchableOpacity>
          <Text style={styles.texto}>{texto}</Text>
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
  stop: {
    color: 'red',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
