import React, {createContext, useState} from 'react';

let ValueContext = createContext();
let {Provider, Consumer} = ValueContext;

function ValueProvider({children}) {
  let [value, setValue] = useState('');

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

  return <Provider value={{value, add, del}}>{children}</Provider>;
}

export {ValueProvider, Consumer as ValueCostumer, ValueContext};
