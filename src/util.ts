export const initCanvas: { color: string; id: number }[][] = [];

for (let i = 0; i < 10; i++) {
  const temp: { color: string; id: number }[] = [];
  for (let j = 0; j < 10; j++) {
    temp.push({ color: "brown", id: i * 10 + j });
  }
  initCanvas.push(temp);
}
