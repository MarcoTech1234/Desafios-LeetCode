function longestOnes(nums: number[], k: number): number {
    let start = 0
    let maior = 0
      let zeroCount = 0

    for(let end = 0; end < nums.length; end++){
        if(!nums[end]) zeroCount++

        while(zeroCount > k) {
          if(!nums[start]) zeroCount--
          start++
        }

        maior = Math.max(maior, end - start + 1)
    }

    return maior
};