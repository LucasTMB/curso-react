import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Lucas', email: 'lucas@gmail.com', bio: 'Sou um programador', role:'admin'}}/>
    </div>
  );
}

export default App;
