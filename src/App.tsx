import { useState } from "react";
import { initCanvas } from "./util";

function App() {
  const [canvas, setCanvas] = useState(initCanvas);
  return (
    <>
      <h1>#paintpixels</h1>
      {canvas.map((row) => (
        <div key={row[0].id} style={{ display: "flex" }}>
          {row.map((unit) => (
            <div key={unit.id}>{unit.color}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
