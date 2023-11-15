import ColorBox from "./ColorBox";
import { ColorsProp } from "./App";
import "./ColorBoxGrid.css";

function ColorGridBox({ colors }: ColorsProp) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div className="ColorBoxGrid">{boxes}</div>;
}

export default ColorGridBox;
