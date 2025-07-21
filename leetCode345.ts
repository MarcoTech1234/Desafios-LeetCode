function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let string = s.split('')

    let left = 0
    let right = string.length - 1
    while (left < right) {
        let c = string[left]
        if (!vowels.has(string[left])) left++
        if (!vowels.has(string[right])) right--
        if (vowels.has(string[right]) && vowels.has(string[left])) {
            [string[left], string[right]] = [string[right], string[left]];
            left++
            right--
        }
    }
    return string.join('')
};