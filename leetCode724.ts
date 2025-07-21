function pivotIndex(nums: number[]): number {
    let total = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let sumLeft = 0

    for (let left = 0; left < nums.length; left++) {
        if (total - (sumLeft + nums[left]) == sumLeft) {
            return left
        }
        sumLeft += nums[left]
    }

    return -1
};