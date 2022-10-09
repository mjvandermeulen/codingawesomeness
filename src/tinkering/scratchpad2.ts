// start with export to turn into module: AVOID TOP LEVEL SCOPED VARIABLES
export const timer = (time: number): Promise<string> =>
    new Promise((resolve) =>
        setTimeout(() => resolve(`Resolved in ${time / 1000} seconds\n`), time)
    );

const times = [1008, 1004, 1007, 1006, 1003, 1005, 1001, 1002];
// const times = [500, 200, 700, 100, 600, 800, 300, 400];

// VERSION 1:
// const syncCall = async () => {
//     const tResolves = await times.reduce(async (prevPromise: string | Promise<string>, time) => {
//         // await prevPromise
//         const resolvemessage = await timer(time);
//         console.log({ resolvemessage });
//         return "OK";
//     }, "OK");
//     console.log({ tResoolves: tResolves });
// };

// VERSION 2:
// const syncCall = async () => {
//     for (const time of times) {
//         const resolvemessage = await timer(time);
//         console.log({ resolvemessage });
//     }
//     return true
// };

// VERSION 3: DOES NOT WORK, Since you have to introduce another aync function
const syncCall = async () => {
    times.forEach( async (time) => {
        const resolvemessage = await timer(time);
        console.log({ resolvemessage });
    })
    return true
};

syncCall();

// expected output: 10

// const result = [1, 2, 3, 4].reduce((acc, el) => {
//     acc.push(el * 2);
//     return acc;
// }, []);
// console.log(result);

// // console.log([].concat([1,2]))
// console.log([1,2,3])
// // const aA: number[] = []
// const aA = []
// const aB = aA.concat([4,5])
// console.log(aB)

// const a = [1,2,3,4,5]
// const b = a.map((el) => {
//     if (el > 5) {
//         return el*2
//     }
// })
