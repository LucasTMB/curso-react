import './App.css';
import BronAndClothes from './assets/Davis-LeBron.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
