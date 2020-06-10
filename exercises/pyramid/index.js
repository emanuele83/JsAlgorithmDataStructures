// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = '') {
    if (n === row) {
        return;
    }
    const cols = n * 2 - 1;
    if (str.length === cols) {
        console.log(str);
        pyramid(n, ++row);
        return;
    }
    const midPoint = Math.floor(cols / 2);
    let char = (midPoint - row <= str.length && str.length <= midPoint + row) ? '#' : ' ';
    pyramid(n, row, str + char);
}

module.exports = pyramid;

// function pyramid(n) {
//     const cols = 2 * n - 1;
//     for (let row = 1; row <= n; row++) {
//         const rowEmpty = n - row;
//         const rowHash = cols - (rowEmpty * 2);
//         console.log(AddCharsToStr(' ', rowEmpty) + AddCharsToStr('#', rowHash) + AddCharsToStr(' ', rowEmpty));
//     }
// }

// function AddCharsToStr(char, n) {
//     let str = '';
//     for (let i = 0; i < n; i++) str += char;
//     return str;
// }