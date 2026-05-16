import { largestRectangle } from "../Problem-6-LargestRectangle/LargestRectangle";

const maximalRectangle = (matrix: number[][]): number => {
  if (matrix.length === 0) {
    return 0;
  }

  const firstRow = matrix[0];

  if (!firstRow) {
    return 0;
  }

  const cols = firstRow.length;
  const heights = new Array(cols).fill(0);

  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    const currentRow = matrix[row];

    if (!currentRow) {
      continue;
    }

    for (let col = 0; col < cols; col++) {
      if (currentRow[col] === 1) {
        heights[col]++;
      } else {
        heights[col] = 0;
      }
    }

    const currentArea = largestRectangle(heights);
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
};

console.log(
  maximalRectangle([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
  ]),
);
