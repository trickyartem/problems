function simpleString(s: string) {
    let out   = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] != s[i + 1]) {
            out += s[i] + count;
            count = 1;
        } else {
            count++;
        }
    }

    return out;
}
