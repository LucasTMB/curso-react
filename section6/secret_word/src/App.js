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

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    // pegando uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pegando uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {word, category}
  }

  // iniciando o jogo
  const startGame = () => {
    // capturando uma palavra e uma categoria
    const {word, category} = pickWordAndCategory();
    console.log(word, category);

    // criando um array de letras
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters)

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