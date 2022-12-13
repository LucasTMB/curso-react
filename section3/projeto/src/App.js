import { useState } from 'react';
import './App.css';
import BronAndClothes from './assets/Davis-LeBron.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  const [userName] = useState('XLucasTMB')
  const age = 19;

  const [cars] = useState([
    {
      id: 1,
      brand: 'Ferrari',
      km: 0,
      color: 'Vermelha',
      newCar: true
    },
    {
      id: 2,
      brand: 'Lamborguini',
      km: 15000,
      color: 'Preta',
      newCar: false
    },
    {
      id: 3,
      brand: 'McLaren',
      km: 0,
      color: 'Amarela',
      newCar: true
    }
  ])

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
      <ShowUserName name={userName} age={age} job="desenvolvedor" />
      <CarDetails brand="Ferrari" km={10000} color="Red" newCar={false} />
      <CarDetails brand="BMW" km={0} color="Silver" newCar={true} />
      <CarDetails brand="Porsche" km={12000} color="Purple" newCar={false} />

      {cars.map((car) => (
        <div>
          <h2>Detalhes dos carros</h2>
          <ul>
            <li>Marca: {car.brand}</li>
            <li>Km: {car.km}</li>
            <li>Cor: {car.color}</li>
            <li>
              {
                car.newCar ?
                ("O carro é novo") :
                ("O carro é usado")
              }
            </li>
          </ul>
        </div>
      ))}
      {/*Fragment */}
      <Fragment fragProp="teste"/>
      {/*Children prop */}
      <Container myValue="Ainda posso usar a prop">
        <p>Esse é um componente filho</p>
      </Container>
    </div>
  );
}

export default App;
