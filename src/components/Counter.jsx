import { useState } from "react";

export function Counter() {
  //let counter = useState(0);  // V1
  const [counter, setCounter] = useState(0);  //V2

  function increment() {
    // console.log('Incrementing');   //V1
    setCounter(counter + 1);   //V2
  }
  
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}