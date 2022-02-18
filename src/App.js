import React from 'react';
import Primeiro from './components/Primeiro';
import CompPadrao, {Component1, Component2} from './components/Multi.js';
import Estilos from './components/Estilos';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

function App() {
  return (
    <div>
      <Primeiro />
      <CompPadrao />
      <Component1 />
      <Component2 />
      <Estilos />
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secudanrio="tudo bem" />
      <Botao />
  </div>
  );
}



export default App;
