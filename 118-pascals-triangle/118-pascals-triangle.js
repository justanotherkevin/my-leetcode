/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [] 
    if (numRows >= 1 ) res.push([1])
    if (numRows >= 2 ) res.push([1,1])
    for (let i = 2; i < numRows; i++) {
        let prevRow = res[i-1]
        
        let l = 0, r = i;
        let hold = [] 
        while ( l <= r ) {
            hold[l] = l === 0 ? 1 : prevRow[l-1] + prevRow[l] 
            hold[r] = l === 0 ? 1 : prevRow[l-1] + prevRow[l] 
            l++
            r--
        }
        res.push(hold)
    }
    return res
};
