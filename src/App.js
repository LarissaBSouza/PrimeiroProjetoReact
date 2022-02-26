import React from 'react';
import Primeiro from './components/Primeiro';
/* import CompPadrao, {Component1, Component2} from './components/Multi.js'; */
/* import Estilos from './components/Estilos'; */
/* import MinMax from './components/MinMax'; */
/* import Titulo from './components/Titulo'; */
/* import Botao from './components/Botao'; */
import Pai from './components/revisao/Pai';
/* import Contador from './components/Contador';*/

import Familia from './components/revisao/Familia';
import Membro from './components/revisao/Membro'
import ParImpara from './components/revisao/ParImpar'
import UsuarioLogado from './components/revisao/UsuarioLogado'
import ListaProdutos from './components/revisao/ListaProdutos'

function App() {
  return (
    <div>

     {/* <Pai/>
      <Familia>
          <Membro nome="Bia" sobrenome="Arruda"/>
          <Membro nome="Carlos" sobrenome="Arruda"/>
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva"/>
        <Membro nome="Julia" sobrenome="Silva"/>
        <Membro nome="Gui" sobrenome="Silva"/>
        <Membro nome="Rebeca" sobrenome="Silva"/>
      </Familia>
      <ParImpar num={3}/>
      <ParImpar num={2}/> */}

      <UsuarioLogado usuario={{nome: 'Gui', email:'gui@gui.com'}}/>
      <UsuarioLogado usuario={{nome: 'Ana'}}/>
      <UsuarioLogado usuario={{email:'gui@gui.com'}}/>
      <UsuarioLogado usuario={{null}}/>
      <UsuarioLogado usuario={{}}/>

      {/* <Primeiro />
      <CompPadrao />
      <Component1 />
      <Component2 />
      <Estilos />
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secudanrio="tudo bem" />
      <Botao />

      <Contador inicial={0}/> */}
    </div>
  );
}



export default App;
