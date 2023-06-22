import { useState } from "react";
import { initCanvas } from "./util";
import Canvas from "./Components/Canvas";

function App() {
  const [canvas, setCanvas] = useState(initCanvas);
  function clickHandler(id: number) {
    return function () {
      setCanvas((canvas) => {
        const newCanvas = [...canvas];
        console.log(id);
        let j = id % 12;
        let i = (id - j) / 12;
        newCanvas[i][j].color = "white";
        return newCanvas;
      });
    };
  }

  return (
    <div>
      <h1>#PaintPixels</h1>
      <Canvas canvas={canvas} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
