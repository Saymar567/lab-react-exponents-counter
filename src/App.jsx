import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";

function App () {
  const [count, setCount] = useState(0);
  const [exponent, setExponent] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} decrement={decrement} increment={increment} exponent={exponent}/>
        <ExponentTwo count={count} setCount={setCount} decrement={decrement} increment={increment} />
        {/*<ExponentThree count={count} setCount={setCount} decrement={decrement} increment={increment}/>
        <ExponentFour count={count} setCount={setCount} decrement={decrement} increment={increment}/>
        <ExponentFive count={count} setCount={setCount} decrement={decrement} increment={increment}/>
  <ExponentSix count={count} setCount={setCount} decrement={decrement} increment={increment}/>*/}
      </div>
    </div>
  );
}

export default App;
