import React, { useState } from "react";
import cat from "../assets/cat.webp";

function StateHandling() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [count, setCount] = useState(0);
  const [catHeight, setHeight] = useState(200);
  const[rotate,setRotatet]=useState(0);

  function changeBColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function imageRotate() {
    setRotatet(rotate + 20);
  }

  function enhanceHeight() {
    setHeight(catHeight + 20);
  }
  function decrementHeight() {
    setHeight(catHeight - 20);
  }
  

  function increment() {
    setCount(count + 20);
  }

  function decrement() {
    setCount(count - 20);
  }


  function change(){
    setGreen(green+20);
  }
  return (
    <div>
      <h2>Change BG</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "2px solid white",
          height: "200px",
          width: "300px",
        }}
        
      >
         <img
          src={cat}
          height={catHeight}
          width={300}
          alt="cat"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
      <button onClick={enhanceHeight}>Enhance Height</button>
      <button onClick={decrementHeight}>Decrement Height</button>
      <button onClick={imageRotate}>Rotate</button>
      <button onClick={changeBColor}>Change BG Color</button>
      <div>
        <button onClick={change}>  Change BG color </button>
      </div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StateHandling;