import React, {createContext, useState, useEffect} from 'react';
import Tts from 'react-native-tts';

let ValueContext = createContext();
let {Provider, Consumer} = ValueContext;

function ValueProvider({children}) {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const [toolTalk, setToolTalk] = useState(false);
  const [idioma, setIdioma] = useState('es-MX');
  const [languages, setLanguages] = useState([]);
  const [reader, setReader] = useState('initiliazing');

  useEffect(() => {
    if (reader === 'initiliazing') {
      initTts();
    }
  }, [reader]);

  const initTts = async () => {
    const voices = await Tts.voices();
    const v = voices.sort((a, b) => {
      return a.language - b.language;
    });
    setLanguages(v);
    setReader('initialized');
  };

  const del = () => {
    let str = value;
    const newStr = str.substring(0, str.length - 1);
    setValue(newStr);
  };

  const add = (letter) => {
    let str = value;
    str = value + letter;
    setValue(str);
  };

  const addOutput = (words) => {
    setOutput(words);
  };

  const deleteOutput = () => {
    setOutput('');
  };

  return (
    <Provider
      value={{
        value,
        add,
        del,
        output,
        addOutput,
        deleteOutput,
        toolTalk,
        setToolTalk,
        idioma,
        setIdioma,
        languages,
      }}>
      {children}
    </Provider>
  );
}

export {ValueProvider, Consumer as ValueCostumer, ValueContext};
