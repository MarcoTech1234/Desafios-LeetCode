function compress(chars: string[]): number {
    let write = 0
    let anchor = 0

    for(let read = 0; read < chars.length; read++){
        if(read + 1 === chars.length || chars[read] !== chars[read+1]) {
            chars[write++] = chars[anchor]

            if (read > anchor) {
                const count = (read - anchor + 1).toString();
                for (const c of count) {
                    chars[write++] = c;
                }
            }

            anchor = read + 1
        }
    }
    return write
}