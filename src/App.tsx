import html2canvas from "html2canvas";
import { useState } from "react";
import { initCanvas } from "./util";
import Canvas from "./Components/Canvas";
import Palette from "./Components/Palette";
import Color from "./Components/Color";

interface UndoHistory {
  i: number;
  j: number;
  color: string;
}

function App() {
  const [canvas, setCanvas] = useState(initCanvas);
  const [color, setColor] = useState("white");
  const [undo, setUndo] = useState<UndoHistory[]>([]);
  function clickHandler(id: number) {
    return function () {
      const j = id % 12;
      const i = (id - j) / 12;
      const lastColor = canvas[i][j].color;
      setUndo((undo) => {
        const newUndo = [...undo];
        newUndo.push({ i, j, color: lastColor });
        return newUndo;
      });
      setCanvas((canvas) => {
        const newCanvas = [...canvas];
        newCanvas[i][j].color = color;
        return newCanvas;
      });
    };
  }
  function undoHandler() {
    setCanvas((canvas) => {
      const newCanvas = [...canvas];
      const lastUndo = undo[undo.length - 1];
      newCanvas[lastUndo.i][lastUndo.j].color = lastUndo.color;
      return newCanvas;
    });
    setUndo((undo) => {
      const newUndo = [...undo];
      newUndo.pop();
      return newUndo;
    });
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
  function colorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value);
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
      {undo.length > 0 && <button onClick={undoHandler}>Undo</button>}
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
