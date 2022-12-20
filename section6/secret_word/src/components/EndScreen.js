import './EndScreen.css';

const EndScreen = ({retryGame}) => {
  return (
    <div>
      <h2>End Screen</h2>
      <button onClick={retryGame}>Resetar jogo</button>
    </div>
  )
}

export default EndScreen