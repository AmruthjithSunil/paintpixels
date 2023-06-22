type Unit = {
  color: string;
  id: number;
};

type CanvasProps = {
  canvas: Unit[][];
  clickHandler: (id: number) => () => void;
};

export default function Canvas({ canvas, clickHandler }: CanvasProps) {
  return (
    <div style={{ marginLeft: "auto" }}>
      {canvas.map((row) => (
        <div key={row[0].id} style={{ display: "flex" }}>
          {row.map((unit) => (
            <div
              onClick={clickHandler(unit.id)}
              key={unit.id}
              style={{
                background: unit.color,
                width: "32px",
                height: "32px",
                border: "dotted",
                borderWidth: "1px",
                borderColor: "#0004",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
