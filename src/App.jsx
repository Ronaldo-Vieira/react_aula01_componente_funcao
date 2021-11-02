import React, { useState } from 'react';
import './App.css';

export default _ => {
  const [numero, setNum] = useState(0)
  return (
    <div className="App">
      <h1>Clicou {numero} vezes</h1>
      <button onClick = { () => {
        return (
          setNum(numero + 1)
        )} 
      }> Aumenta </button>
      <button onClick= { () =>{ setNum(numero - 1) } }>Diminui</button>
    </div>
  );
};