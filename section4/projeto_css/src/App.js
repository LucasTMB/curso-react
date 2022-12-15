import MyComponent from './components/MyComponent';
import './App.css';
import Title from './components/Title';

function App() {

  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      <h1>CSS global</h1>
      <MyComponent />
      <p>Esse é um p global</p>
      <p style={{color: "blue", padding: "25px"}}>Este elemento foi estilizado de forma inline</p>
      {/*CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color:'purple'}) : ({color:'green'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:'purple'}) : ({color:'green'})}>CSS dinâmico</h2>
      {/*Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica.
      </h2>
      <Title />
      <h1 className="my-title">Testando CSS modules</h1>
    </div>
  );
}

export default App;
