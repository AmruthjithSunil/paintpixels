import html2canvas from "html2canvas";
import { useState } from "react";
import { initCanvas } from "./util";
import Canvas from "./Components/Canvas";
import Palette from "./Components/Palette";
import Color from "./Components/Color";

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
    const canvasElement = document.querySelector(".canvas") as HTMLElement;
    if (canvasElement) {
      const canvas = await html2canvas(canvasElement);
      const imgData = canvas.toDataURL("img/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "canvas.png";
      link.click();
    }
  }
  function colorChange(e) {
    console.log(e);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>#PaintPixels</h1>
      <div className="canvas" style={{ display: "inline-block" }}>
        <Canvas canvas={canvas} clickHandler={clickHandler} />
      </div>
      <Palette setColor={setColor} />
      <div style={{ display: "flex" }}>
        <Color setColor={setColor}>{color}</Color>
        <input type="text" value={color} onChange={colorChange} />
      </div>
      <button onClick={download}>Download Image</button>
    </div>
  );
}

export default App;
