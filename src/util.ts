export const initCanvas: { color: string; id: number }[][] = [];

for (let i = 0; i < 16; i++) {
  const temp: { color: string; id: number }[] = [];
  for (let j = 0; j < 12; j++) {
    temp.push({ color: "brown", id: i * 12 + j });
  }
  initCanvas.push(temp);
}
