//import { useContext } from "react"
//import {CounterContext} from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Product = () => {
  //const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - context mais complexo
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Product</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Product