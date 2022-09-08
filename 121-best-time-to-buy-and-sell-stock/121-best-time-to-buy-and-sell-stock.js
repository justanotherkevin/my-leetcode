/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = null
 
    for (let p of prices) {
        if (min === null) {
            min = p; 
            continue;
        } 
        if (p < min) {
            min = p
        } 

        max = Math.max( max, p - min );
    }
    return max
}

