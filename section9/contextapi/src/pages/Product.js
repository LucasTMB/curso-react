//import { useContext } from "react"
//import {CounterContext} from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Product = () => {
  //const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>Product</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Product