function maxOperations(nums: number[], k: number): number {
    const hashTable = new Map<number, number>();
    let op = 0

    for (let left = 0; left < nums.length; left++) {
        let resto = k - nums[left]
        if (hashTable.has(resto) && hashTable.get(resto) != 0) {
            hashTable.set(resto, hashTable.get(resto)! - 1)
            op++
        } else {
            hashTable.set(nums[left], (hashTable.get(nums[left]) || 0) + 1)
        }
    }
    return op
};