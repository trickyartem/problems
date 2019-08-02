function stars(length: number): string {
    let out = '';
    let reverse_row = 0;
    let inc = 1;

    for (let cols = 0; cols < length * 2; cols++) {
        reverse_row += inc;
        if (reverse_row === length) inc = -1;
        for (let i = 0; i < length - reverse_row; i++) {
            out += ' ';
        }

        for (let rows = 0; rows < reverse_row; rows++) {
            out += '* ';
        }
        out += '\n';
    }

    return out;
}

console.log(stars(5));