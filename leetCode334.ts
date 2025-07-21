function increasingTriplet(nums: number[]): boolean {
  let one = Infinity
  let two = Infinity

  for (let cont = 0; cont < nums.length; cont++) {
    if(nums[cont] <= one){
      one = nums[cont]
    } else if (nums[cont] <= two) {
      two = nums[cont]
    } else {
      return true
    }
  }
  return false
}