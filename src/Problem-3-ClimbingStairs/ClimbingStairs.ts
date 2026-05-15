const climbingStairs = (n: number): number => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }


  return climbingStairs(n-1) + climbingStairs(n-2);
};

console.log(climbingStairs(4));
