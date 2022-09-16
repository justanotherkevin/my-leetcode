/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [] 
    if (numRows >= 1 ) res.push([1])
    if (numRows >= 2 ) res.push([1,1])
    for (let i = 2; i < numRows; i++) {
        let insertIdx = i-1;
        let prevRow = res[insertIdx]
        
        let l = 0, r = i;
        let hold = [] 
        while ( l <= r ) {
            let cal = l === 0 ? 1 : prevRow[l-1] + prevRow[l] 
            hold[l] = cal
            hold[r] = cal
            l++
            r--
        }
        res.push(hold)
    }
    return res
};
