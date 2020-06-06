import React, {useState, useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Letter from '../components/letter';
import Option from '../components/option';
import Space from '../components/space';
import {obscuro, primary} from '../assets/styles';
import {ValueContext} from '../context/ValueContext';
import playSound from '../commonfunctions/playSound';

const lt = [
  ['A', 'a', require('./../assets/sound/a.mp3')], //0
  ['B', 'b', require('./../assets/sound/b.mp3')], //1
  ['C', 'c', require('./../assets/sound/c.mp3')], //2
  ['D', 'd', require('./../assets/sound/d.mp3')], //3
  ['E', 'e', require('./../assets/sound/e.mp3')], //4
  ['F', 'f', require('./../assets/sound/f.mp3')], //5
  ['G', 'g', require('./../assets/sound/g.mp3')], //6
  ['H', 'h', require('./../assets/sound/h.mp3')], //7
  ['I', 'i', require('./../assets/sound/i.mp3')], //8
  ['J', 'j', require('./../assets/sound/j.mp3')], //9
  ['K', 'k', require('./../assets/sound/k.mp3')], //10
  ['L', 'l', require('./../assets/sound/l.mp3')], //11
  ['M', 'm', require('./../assets/sound/m.mp3')], //12
  ['N', 'n', require('./../assets/sound/n.mp3')], //13
  ['Ñ', 'ñ', require('./../assets/sound/enie.mp3')], //14
  ['O', 'o', require('./../assets/sound/o.mp3')], //15
  ['P', 'p', require('./../assets/sound/p.mp3')], //16
  ['Q', 'q', require('./../assets/sound/q.mp3')], //17
  ['R', 'r', require('./../assets/sound/r.mp3')], //18
  ['S', 's', require('./../assets/sound/s.mp3')], //19
  ['T', 't', require('./../assets/sound/t.mp3')], //20
  ['U', 'u', require('./../assets/sound/u.mp3')], //21
  ['V', 'v', require('./../assets/sound/v.mp3')], //22
  ['W', 'w', require('./../assets/sound/w.mp3')], //23
  ['X', 'x', require('./../assets/sound/x.mp3')], //24
  ['Y', 'y', require('./../assets/sound/y.mp3')], //25
  ['Z', 'z', require('./../assets/sound/z.mp3')], //26
];

export default function Keyboard() {
  const {add, del} = useContext(ValueContext);
  const [mayus, setMayus] = useState(1);

  const click = (index) => {
    add(lt[index][mayus]);
    playSound(lt[index][2]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Letter l={lt[17][mayus]} onPress={() => click(17)} />
        <Letter l={lt[23][mayus]} onPress={() => click(23)} />
        <Letter l={lt[4][mayus]} onPress={() => click(4)} />
        <Letter l={lt[18][mayus]} onPress={() => click(18)} />
        <Letter l={lt[20][mayus]} onPress={() => click(20)} />
        <Letter l={lt[25][mayus]} onPress={() => click(25)} />
        <Letter l={lt[21][mayus]} onPress={() => click(21)} />
        <Letter l={lt[8][mayus]} onPress={() => click(8)} />
        <Letter l={lt[15][mayus]} onPress={() => click(15)} />
        <Letter l={lt[16][mayus]} onPress={() => click(16)} />
      </View>

      <View style={styles.row}>
        <Letter l={lt[0][mayus]} onPress={() => click(0)} />
        <Letter l={lt[19][mayus]} onPress={() => click(19)} />
        <Letter l={lt[3][mayus]} onPress={() => click(3)} />
        <Letter l={lt[5][mayus]} onPress={() => click(5)} />
        <Letter l={lt[6][mayus]} onPress={() => click(6)} />
        <Letter l={lt[7][mayus]} onPress={() => click(7)} />
        <Letter l={lt[9][mayus]} onPress={() => click(9)} />
        <Letter l={lt[10][mayus]} onPress={() => click(10)} />
        <Letter l={lt[11][mayus]} onPress={() => click(11)} />
        <Letter l={lt[14][mayus]} onPress={() => click(14)} />
      </View>

      <View style={styles.row}>
        <Option
          icon="arrow-up"
          onPress={() => {
            setMayus(mayus === 0 ? 1 : 0);
          }}
        />
        <Letter l={lt[26][mayus]} onPress={() => click(26)} />
        <Letter l={lt[24][mayus]} onPress={() => click(24)} />
        <Letter l={lt[2][mayus]} onPress={() => click(2)} />
        <Letter l={lt[22][mayus]} onPress={() => click(22)} />
        <Letter l={lt[1][mayus]} onPress={() => click(1)} />
        <Letter l={lt[13][mayus]} onPress={() => click(13)} />
        <Letter l={lt[12][mayus]} onPress={() => click(12)} />
        <Option icon="arrow-left" onPress={del} />
      </View>
      <View style={styles.space}>
        <Space />
        <Option
          icon="level-down"
          onPress={() => add('\n')}
          style={styles.enter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 20,
    backgroundColor: primary,
    paddingVertical: 10,
    shadowColor: obscuro,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,
    elevation: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  enter: {
    transform: [{rotate: '90deg'}],
  },
});
