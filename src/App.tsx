import { useState } from "react";

function App() {
  const initCanvas: { color: string; id: number }[][] = [];

  for (let i = 0; i < 10; i++) {
    const temp: { color: string; id: number }[] = [];
    for (let j = 0; j < 10; j++) {
      temp.push({ color: "brown", id: i * 10 + j });
    }
    initCanvas.push(temp);
  }
  const [canvas, setCanvas] = useState(initCanvas);
  function clickHandler(id: number) {
    return function () {
      setCanvas((canvas) => {
        const newCanvas = [...canvas];
        console.log(id);
        let j = id % 10;
        let i = (id - j) / 10;
        newCanvas[i][j].color = "white";
        return newCanvas;
      });
    };
  }

  return (
    <>
      <h1>#paintpixels</h1>
      <div style={{ border: "solid" }}>
        {canvas.map((row) => (
          <div key={row[0].id} style={{ display: "flex" }}>
            {row.map((unit) => (
              <div
                onClick={clickHandler(unit.id)}
                key={unit.id}
                style={{
                  background: unit.color,
                  width: "50px",
                  height: "50px",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
