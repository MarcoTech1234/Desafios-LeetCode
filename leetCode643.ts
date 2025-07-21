function findMaxAverage(nums: number[], k: number): number {
    // Soma dos primeiros k elementos
    let total = 0
    for (let i = 0; i < k; i++) {
        total += nums[i]
    }

    let maxSum = total

    // Sliding window começa no índice k
    for (let i = k; i < nums.length; i++) {
        total = total - nums[i - k] + nums[i]
        maxSum = Math.max(maxSum, total)
    }

    return maxSum / k
}
