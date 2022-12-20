// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// data
import {wordsList} from './data/words';
// components
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // iniciando o jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // processando o input de letras
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // reiniciar o jogo
  const retryGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <EndScreen retryGame={retryGame}/>}
    </div>
  );
}

export default App;
