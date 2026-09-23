import React, { useState } from 'react'

function statehandling() {
  const[count,setCount]=useState(0);

  function increment(){
    setCount(count+20);
  }

  function decrement(){
    setCount(count-10);
  }

  return (
    <div>
      statehandling
      <h2>Count={count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default statehandling
