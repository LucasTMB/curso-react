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
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

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

  function funcaoProp() {
    alert('Função do componente pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const [users] = useState([
    {
        id: 1,
        name: 'Lucas Teixeira',
        age: 19,
        job: 'desenvolvedor'
    },
    {
        id: 2,
        name: 'Maria Eduarda',
        age: 22,
        job: 'desenvolvedora'
    },
    {
        id: 3,
        name: 'Matheus Henrique',
        age: 24,
        job: 'contador'
    },
    {
        id: 4,
        name: 'Ester Reis',
        age: 17,
        job: 'estilista'
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

      {/*Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/*Fragment */}
      <Fragment fragProp="teste"/>
      {/*Children prop */}
      <Container myValue="Ainda posso usar a prop">
        <p>Esse é um componente filho</p>
      </Container>
      <ExecuteFunction functionProp={funcaoProp}/>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>

      {users.map((user) => (
        <UserDetails 
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
