import { useState } from 'react';
import './App.css';
import BronAndClothes from './assets/Davis-LeBron.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const [userName] = useState('XLucasTMB')
  const age = 19;

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img className='imagens' src="/Kobe-Shaq.jpg" alt="Kobe e Shaq" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img className='imagens' src={BronAndClothes} alt="Anthony Davis e LeBron James" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} age={age} job="desenvolvedor"  />
    </div>
  );
}

export default App;
