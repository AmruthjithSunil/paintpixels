import { useState } from "react";
import { initCanvas } from "./util";
import Canvas from "./Components/Canvas";
import Palette from "./Components/Palette";

function App() {
  const [canvas, setCanvas] = useState(initCanvas);
  const [color, setColor] = useState("white");
  function clickHandler(id: number) {
    return function () {
      setCanvas((canvas) => {
        const newCanvas = [...canvas];
        console.log(id);
        let j = id % 12;
        let i = (id - j) / 12;
        newCanvas[i][j].color = color;
        return newCanvas;
      });
    };
  }

  return (
    <div>
      <h1>#PaintPixels</h1>
      <Canvas canvas={canvas} clickHandler={clickHandler} />
      <Palette setColor={setColor} />
    </div>
  );
}

export default App;
