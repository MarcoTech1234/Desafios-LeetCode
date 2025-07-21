function maxVowels(s: string, k: number): number {
    const vowels = new Set<string>([
      'a',
      'e',
      'i',
      'o',
      'u'
    ]);
    let cont = 0
    let maxCont = 0
    let string = ''

    for(let index = 0; index < k; index++){
      let caracter = s[index]
      if(vowels.has(caracter)) cont++
      string += caracter
    }

    maxCont = cont
    for(let index = k; index < s.length; index++){
      if(vowels.has(s[index])) cont++
      if(vowels.has(s[index - k])) cont--
      maxCont = Math.max(maxCont, cont)
    }

    return maxCont;
};