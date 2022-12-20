import './GameScreen.css';

const GameScreen = ({verifyLetter}) => {
  return (
    <div>
        <h2>Game Screen</h2>
        <button onClick={verifyLetter}>Verificar letra</button>
    </div>
  )
}

export default GameScreen