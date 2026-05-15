const floodFill = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  const startRow = img[sr];

  if (!startRow) return img;

  const originalColor = startRow[sc];

  if (originalColor === undefined || originalColor === newColor) {
    return img;
  }

  const fill = (row: number, col: number): void => {
    const currentRow = img[row];

    if (!currentRow || col < 0 || col >= currentRow.length) {
      return;
    }

    if (currentRow[col] !== originalColor) {
      return;
    }

    currentRow[col] = newColor;

    fill(row - 1, col);
    fill(row + 1, col);
    fill(row, col - 1);
    fill(row, col + 1);
  };

  fill(sr, sc);

    return img;
};
console.log(floodFill([[1,1,1,0],[0,1,1,1],[1,0,1,1]],1,2,2));