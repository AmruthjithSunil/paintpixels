import Color from "./Color";

export default function Palette({
  setColor,
}: {
  setColor: (color: string) => void;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Color setColor={setColor}>red</Color>
      <Color setColor={setColor}>green</Color>
      <Color setColor={setColor}>blue</Color>
      <Color setColor={setColor}>white</Color>
      <Color setColor={setColor}>black</Color>
    </div>
  );
}
