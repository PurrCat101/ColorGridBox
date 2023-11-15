import { useState } from "react";
import { ColorsProp } from "./App";
import "./ColorBox.css";

function randomChoice(arr: string[]) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function ColorBox({ colors }: ColorsProp) {
  const [color, setColor] = useState<string>(randomChoice(colors));

  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };

  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
