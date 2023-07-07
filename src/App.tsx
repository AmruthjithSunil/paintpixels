import html2canvas from "html2canvas";
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
  async function download() {
    const canvas = await html2canvas(document.querySelector(".canvas"));
    const imgData = canvas.toDataURL("img/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "canvas.png";
    link.click();
  }

  return (
    <div>
      <h1>#PaintPixels</h1>
      <div className="canvas" style={{ display: "inline-block" }}>
        <Canvas canvas={canvas} clickHandler={clickHandler} />
      </div>
      <Palette setColor={setColor} />
      <button onClick={download}>Download Image</button>
    </div>
  );
}

export default App;
