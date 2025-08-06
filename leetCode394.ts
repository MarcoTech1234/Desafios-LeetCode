function decodeString(s: string): string {
  const [decoded] = recursion(s, 0);
  return decoded;
}

function recursion(s: string, i: number): [string, number] {
  let current = '';
  let num = '';

  while (i < s.length) {
    const c = s[i];

    if (/\d/.test(c)) {
      num += c;
    }

    else if (c === '[') {
      const [decodedBlock, newIndex] = recursion(s, i + 1);
      current += decodedBlock.repeat(Number(num));
      num = '';
      i = newIndex;
    }

    else if (c === ']') {
      return [current, i];
    }
    else {
      current += c;
    }

    i++;
  }

  return [current, i];
}