// const highlight = require('fuzzysearch-highlight')
// const fuzzysearch = require('fuzzysearch')

// export const scratchpadBogus = 0; // turn this into a module

// const history = [];
// for (let search = 0; search < 10; search++) {
//     history.unshift(search);
//     if (history.length > 3) history.pop();
//     console.log({ history });
// }

const arrayToCut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const n = 5; //get the first 5 items

const newArray = arrayToCut.slice(0, n);

console.log({ arrayToCut });
console.log({ newArray });
