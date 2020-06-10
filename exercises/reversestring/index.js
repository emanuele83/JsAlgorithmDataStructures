// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for(let chr of str){
        reversed = chr + reversed;
        // debugger;
    }
    return reversed;
}

// reverse('emsa');

module.exports = reverse;


// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     return str.split('').reduce((rev, chr) => {
//         return chr + rev;
//     }, '');
// }