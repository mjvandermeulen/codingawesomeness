export const scratchpadBogus = 0; // turn this into a module

(function () {
    let count = 0;
    const waitingID = setInterval(() => {
        count++;
        console.log(`${count} waiting...`);
    }, 100);
    setTimeout(() => {
        setTimeout(() => clearInterval(waitingID), 550);
        console.log("Hello World, It's been while");
    }, 2000);
})();

console.log("END");