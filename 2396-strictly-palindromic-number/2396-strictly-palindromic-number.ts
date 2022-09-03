function isStrictlyPalindromic(n: number): boolean {
    function baseConversion(num: number, base: number): string  { 
        return num.toString(base);
    };
    function isPalindrom(str:string): boolean {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left += 1;
            right -= 1;
        }
        return true;
    }
    let loopCount = 2;
    let ans = true;
    while ( ans && loopCount <= n-2 ) {
        const testStr = baseConversion(n,loopCount);
        if ( !isPalindrom(testStr) ) ans = false;
        loopCount++;
    }
    return ans;
};  
// n to n -2 base 
