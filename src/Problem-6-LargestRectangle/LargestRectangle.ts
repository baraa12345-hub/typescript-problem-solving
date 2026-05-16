export const largestRectangle = (heights: number[]): number => {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity;

    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]!);

      const width = j - i + 1;
      const area = minHeight * width;

      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

//console.log(largestRectangle([6, 2, 5, 4, 5, 1, 6])); 
