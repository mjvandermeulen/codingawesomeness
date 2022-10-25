export const scratchpadBogus = 0; // turn this into a module

const history = [];
for (let search = 0; search < 10; search++) {
    history.unshift(search);
    if (history.length > 3) history.pop();
    console.log({ history });
}
