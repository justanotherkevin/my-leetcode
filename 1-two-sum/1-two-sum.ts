function twoSum(nums: number[], target: number): number[] {
    let numsHolder: number[] = [] 
    for (let i = 0; i < nums.length; i++ ) {
        const thisVal:number = nums[i];
        const diff:number = target - nums[i];
        
        if ( numsHolder[diff] >= 0 ) { 
            return [i, numsHolder[diff]]
        }
        numsHolder[thisVal] = i
    }
};
