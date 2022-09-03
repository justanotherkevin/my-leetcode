function findSubarrays(nums: number[]): boolean {
    if (nums.length < 3) return false; 
    let l = 0;
    let r = 1; 
    let sums = new Set();
    let ans = false;
    while ( r <= nums.length -1 ) { 

        if (sums.has(nums[l] + nums[r])) {
            ans = true; break; 
        };

        sums.add(nums[l] + nums[r]);
        l++;
        r++;
    }
    return ans;
};