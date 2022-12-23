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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // pegando uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pegando uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {word, category}
  }, [words]);

  // iniciando o jogo
  const startGame = useCallback(() => {
    // limpando todas as letras
    clearLetterStates();

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
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  // processando o input de letras
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // checando se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // adicionando uma letra acertada ou remover uma tentativa

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // verificando se as tentativas terminaram
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates()

      setGameStage(stages[2].name);
    }
  }, [guesses])

  // checando a condição de vitória
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    // condição de vitória
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore += 100);

      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame])

  // reiniciar o jogo
  const retryGame = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <GameScreen 
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && (
        <EndScreen 
          retryGame={retryGame}
          score={score}
        />
      )}
    </div>
  );
}

export default App;