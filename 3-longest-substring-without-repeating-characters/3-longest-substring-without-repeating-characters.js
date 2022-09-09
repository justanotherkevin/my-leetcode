/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    /*
    two pointers L R; L = 0 R = 0 
    max length 
    set for all char bewtween L and R 
    while R < s.length 
        substring  = S[L] to s[R]
        track max length 
        increase R until there is a repeating char in substring 
            if repeating, move L untll no longer repeating 
            remove s[L] from Set 
    loop end, return max length 
    */ 
    // abcb
    let l = 0, 
        r = 0,
        maxSize = 0,
        bucket = new Set(); 
    while ( r < s.length ) {
        let lChar = s.charCodeAt(l);
        let rChar = s.charCodeAt(r);
        if ( bucket.has(rChar) ) {
            while ( bucket.has(rChar) ) {
                lChar = s.charCodeAt(l);
                bucket.delete(lChar);
                l++
            }
        }
        bucket.add(rChar);
        r++;
        maxSize = Math.max(r - l, maxSize);
    }
    return maxSize;
}
    
