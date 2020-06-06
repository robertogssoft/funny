import React, {createContext, useState} from 'react';

let ValueContext = createContext();
let {Provider, Consumer} = ValueContext;

function ValueProvider({children}) {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const [toolTalk, setToolTalk] = useState(false);

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
      }}>
      {children}
    </Provider>
  );
}

export {ValueProvider, Consumer as ValueCostumer, ValueContext};
