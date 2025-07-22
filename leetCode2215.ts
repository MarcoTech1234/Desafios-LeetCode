function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [[], []];
  const hashNums1: Set<number> = new Set<number>(nums1);
  const hashNums2: Set<number> = new Set<number>(nums2);

  for(const num of hashNums1) {
    if(!hashNums2.has(num))
      result[0].push(num)
  }

  for(const num of hashNums2) {
    if(!hashNums1.has(num))
      result[1].push(num)
  }

  return result
}