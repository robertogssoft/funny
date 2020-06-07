import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Modal,
  TouchableOpacity,
  Switch,
  FlatList,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {primary, obscuro, claro} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ValueContext} from './../context/ValueContext';

export default function Configs() {
  const {toolTalk, setToolTalk, languages, idioma, setIdioma} = useContext(
    ValueContext,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [value, onChangeText] = useState('');
  const [data, setData] = useState(languages);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setIdioma(item.language)}
      style={styles.itemlist}>
      <Text>{item.language}</Text>
      <Text style={styles.green}>
        {item.networkConnectionRequired ? 'Internet' : null}
      </Text>
    </TouchableOpacity>
  );

  const filterArrayObjects = (text) => {
    onChangeText(text);
    const busqueda = text.toLowerCase();
    const resultados = languages.filter(
      (v) => v.language.indexOf(busqueda) >= 0,
    );
    setData(resultados);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.touch}>
        <Icon name="cogs" color={primary} size={20} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.right}>
              <Text>Herramientas de configuración</Text>
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
                <Text> Herramienta de dictado</Text>
                <Text style={styles.smallText}> ¿Cómo se escribe?</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity
              style={[styles.row, styles.space]}
              onPress={() => setListVisible(!listVisible)}>
              <Text>Idioma: </Text>
              <Text>{idioma}</Text>
              <Icon name="chevron-down" color={obscuro} size={15} />
            </TouchableOpacity>
            {listVisible ? (
              <View>
                <TextInput
                  style={styles.textInput}
                  inlineImageLeft="search_icon"
                  placeholder="Search"
                  onChangeText={(text) => filterArrayObjects(text)}
                  value={value}
                />
                <FlatList
                  showsVerticalScrollIndicator={false}
                  keyExtractor={keyExtractor}
                  data={data}
                  renderItem={renderItem}
                  style={styles.list}
                />
              </View>
            ) : null}

            <View style={styles.divider} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignItems: 'flex-end',
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
    fontSize: wp(3),
  },
  touch: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-between',
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
  divider: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  space: {
    justifyContent: 'space-between',
  },
  list: {
    height: hp(15),
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  itemlist: {
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginVertical: 3,
    paddingVertical: 3,
  },
});
