const RodCutting =(price : number[], n : number) : number => {
    if (n <= 0) {
        return 0;
    }

    let maxPrice = 0;
    for (let i = 1; i <= n; i++){
        let currentPrice = price[i]! + RodCutting(price, n - i);
        maxPrice = Math.max(maxPrice, currentPrice);
    }
    return maxPrice;

}
console.log(RodCutting([0, 1, 5, 8, 9], 4));