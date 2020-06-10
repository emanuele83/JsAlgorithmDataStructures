// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let stopper = 's';
    const arr = [root, stopper];
    const counters = [0];
    while (arr.length > 1) {
        let node = arr.shift();
        if (node !== stopper) {
            counters[counters.length - 1]++;
            if (node) {
                arr.push(...node.children);
            }
        } else {
            counters.push(0);
            arr.push(stopper);
        }
    }
    return counters;
}

module.exports = levelWidth;
