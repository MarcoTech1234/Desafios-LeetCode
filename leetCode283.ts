/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let next = 0

    for(let current = 0; current < nums.length; current++){
        if(nums[current] !== 0){
            [nums[current], nums[next]] = [nums[next], nums[current]]
            next++  
        } 
    }
};
