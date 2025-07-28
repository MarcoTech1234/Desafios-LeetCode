function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const hashMap1: Map<string, number> = new Map();
    const hashMap2: Map<string, number> = new Map();

    for (const char of word1) {
        hashMap1.set(char, (hashMap1.get(char) ?? 0) + 1);
    }

    for (const char of word2) {
        hashMap2.set(char, (hashMap2.get(char) ?? 0) + 1);
    }

    if (hashMap1.size !== hashMap2.size) return false;

    for (const [char, freq] of hashMap1) {
        if (!hashMap2.has(char)) {
            return false;
        }
    }

    const values1 = Array.from(hashMap1.values()).sort((a, b) => a - b);
    const values2 = Array.from(hashMap2.values()).sort((a, b) => a - b);

    if (!values1.every((val, i) => val === values2[i]))
        return false

    return true;
}