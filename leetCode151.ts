function reverseWords(s: string): string {
    let stringArray = s.trim().split(/\s+/)
    let result: string[] = []

    for(let cont = 0; cont < stringArray.length; cont++){
        result.push(stringArray[(stringArray.length-1)-cont])
    }

    return result.join(' ')
};