import Sound from 'react-native-sound';
import {Alert} from 'react-native';
const playSound = (audio) => {
  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      return;
    }

    audio.onPrepared && audio.onPrepared(sound);
    sound.play(() => {
      sound.release();
    });
  };

  const sound = new Sound(audio, (error) => callback(error, sound));
};

export default playSound;
