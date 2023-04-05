//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
//import {CounterContext} from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>
        Home
      </h1>
      <p>
        Valor do contador: {counter}
      </p>
      {/*3 - Alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home