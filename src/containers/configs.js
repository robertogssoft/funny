import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Modal,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {primary, obscuro, claro} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tts from 'react-native-tts';
import {ValueContext} from './../context/ValueContext';

export default function Configs() {
  const {toolTalk, setToolTalk} = useContext(ValueContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [reader, setReader] = useState('initiliazing');
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    if (reader === 'initiliazing') {
      initTts();
    }
  }, [reader]);

  const initTts = async () => {
    const v = await Tts.voices();
    setVoices(v);
    //if (voices && voices.length > 0) {
    /*try {
      await Tts.setDefaultLanguage('es-MX');
    } catch (err) {
      //console.log('setDefaultLanguage error ', err);
    }*/
    setReader('initialized');
    //}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => setModalVisible(true)}>
        Config
      </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.right}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="times" color={obscuro} size={25} />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Switch
                trackColor={{false: primary, true: claro}}
                thumbColor={primary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setToolTalk(!toolTalk)}
                value={toolTalk}
              />
              <View>
                <Text> ¿Cómo se escribe?</Text>
                <Text style={styles.smallText}> Herramienta de dictado</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
      default: {
        marginTop: 10,
      },
    }),
  },
  green: {
    color: claro,
  },
  text: {
    fontSize: wp(3),
    color: primary,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: wp(2),
  },
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '95%',
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  right: {
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  select: {
    width: '100%',
    height: 40,
  },
});
