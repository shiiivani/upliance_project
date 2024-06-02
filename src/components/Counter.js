import React, { useState } from "react";
import "../styles/Counter.css";
import Lottie from "react-lottie";
import animationData from "../Animation - 1717228195052.json";
import Navbar from "./Navbar";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  const fillHeight = `${110 + count * 2}%`;
  const rectangleHeight = `${count + 10}%`;

  return (
    <>
      <Navbar />
      <div className="counter-container">
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            width: "100%",
            height: fillHeight,
            overflow: "hidden",
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            style={{ position: "absolute", bottom: "-140px" }}
          />
        </div>
        <div
          className="fill-container"
          style={{ height: rectangleHeight }}
        ></div>
        <div className="counter-display">{count}</div>
        <div className="counter-buttons">
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
