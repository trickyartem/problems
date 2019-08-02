function max_goods(prices: Array<number>, cash: number): number {
    let how_many = 0;

    prices.sort((a, b) => a - b);
    prices.forEach(element => {
        if (cash - element < 0) {
            return how_many;
        } else {
            cash -= element;
            how_many++;
        }
    });
    return how_many;
}

console.log(max_goods([10, 5, 2, 2, 2, 2, 2, 2, 2, 1], 15));