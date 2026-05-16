const JumpGame = (arr: number[]): boolean => {
    let maxReach = 0;   

    for (let i = 0; i < arr.length; i++){
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + arr[i]!);
        
    }
    return true;
}
console.log(JumpGame([2, 3, 1, 1, 4]));