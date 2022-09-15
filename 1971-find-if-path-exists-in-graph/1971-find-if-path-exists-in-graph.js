/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let paths = [];
    for ( let edge of edges ) {
        if ( paths[edge[0]] === undefined ) {
            paths[edge[0]] = new Set();
        }
        if ( paths[edge[1]] === undefined ) {
            paths[edge[1]] = new Set();
        }
        paths[edge[0]].add(edge[1])
        paths[edge[1]].add(edge[0])
    };
    
    let check = [destination]; 
    let visited = new Set()
    let boo = false;
    while (check.length) {
        console.log ( check)
        let thisCheck = check.pop();
        visited.add(thisCheck) 
        if ( paths[thisCheck] && thisCheck != source ) {
            paths[thisCheck].forEach( val => {
                if (!visited.has(val)) { check.push(val) }
            })
        }
        if ( thisCheck == source ) {
            boo = true
            break 
        }
    }
    
    
    return boo
};