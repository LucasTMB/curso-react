import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState('John');

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, sim!</p>}
        {name === 'Lucas' ? (
          <div>
            <p>O nome é Lucas</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}
        <button onClick={() => setName('Lucas')}>Mudar o nome!</button>
    </div>
  )
}

export default ConditionalRender