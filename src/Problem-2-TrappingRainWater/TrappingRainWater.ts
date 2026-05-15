const TrappingRainWater = (arr: number[]): number => {
    let totalWater = 0;
    for (let i = 1; i < arr.length - 1; i++) {
      const currentHeight = arr[i];

      if (currentHeight === undefined) {
        return totalWater;
      }

      const leftMax = Math.max(...arr.slice(0, i));
      const rightMax = Math.max(...arr.slice(i + 1));
      const currentWater = Math.max(
        0,
        Math.min(leftMax, rightMax) - currentHeight,
      );

      totalWater += currentWater;
    }
    return totalWater;
}
console.log(TrappingRainWater([3, 0, 1, 0, 4, 0, 2]));