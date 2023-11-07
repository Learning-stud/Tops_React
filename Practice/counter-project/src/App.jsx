import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  /*  For Addition */
  const addValue = () => {
    console.log("clicked", Math.random);
    // counter = counter + 1;
    setCounter(counter + 1);
    /* downside it will create an batch and repeat the same work  */
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  /*  for SubStracTion  */
  const minusValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1> COUNTER </h1>
      <h1>uounter value : {counter}</h1>
      <button onClick={addValue}> Add Value </button>
      <br />
      <button onClick={minusValue}> Remove Value </button>
    </>
  );
}

export default App;
