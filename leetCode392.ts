function isSubsequence(s: string, t: string): boolean {
    let indexString = 0

    for(let indexText = 0; indexText < t.length; indexText++) {
        if(t.charAt(indexText) === s.charAt(indexString)) indexString++
    }

    return indexString == s.length
};
