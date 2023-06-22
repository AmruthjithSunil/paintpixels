export default function Color({
  children,
  setColor,
}: {
  children: string;
  setColor: (color: string) => void;
}) {
  return (
    <div
      style={{
        background: children,
        border: "solid",
        height: "32px",
        width: "32px",
      }}
      onClick={() => {
        setColor(children);
      }}
    ></div>
  );
}
