function uniqueOccurrences(arr: number[]): boolean {
  const HashNumberFrequency: Map<number, number>  = new Map()
  const HashFrequency: Set<number>  = new Set()

  for(let index = 0; index < arr.length; index++) {
    HashNumberFrequency.set(arr[index], (HashNumberFrequency.get(arr[index]) ?? 0) + 1)
  }

  for(const freq of HashNumberFrequency.values()){
    if(HashFrequency.has(freq)){
        return false
    }
    HashFrequency.add(freq)
  }

  return true
    
};