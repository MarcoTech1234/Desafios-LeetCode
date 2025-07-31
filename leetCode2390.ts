function removeStars(s: string): string {
    let stack: string[] = []

    for(let cont = 0; cont < s.length; cont++) {
      let character = s[cont]
      if(character === '*') 
        stack.pop()
      else 
        stack.push(character)
    }

    return stack.join('')
};