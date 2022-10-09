const timer = (time: number): Promise<string> =>
    new Promise((resolve) =>
        setTimeout(() => resolve(`Resolved in ${time / 1000} seconds\n`), time)
    );

const times = [1008, 1004, 1007, 1006, 1003, 1005, 1001, 1002];
// const times = [500, 200, 700, 100, 600, 800, 300, 400];

const asyncCall = async () => {
    const timerResolves = await Promise.all(
        times.map(async (time) => await timer(time))
    );
    console.log(timerResolves);
    const initArray: string[] = []
    const initPromise: Promise<string[]> = new Promise((resolve) => resolve(initArray))
    const tResolves = await times.reduce(async (resolvedArray, time) => {
        const resolvemessage = await timer(time);
        console.log({time})
        return [...(await resolvedArray), resolvemessage];
    },
    initPromise 
    )
    console.log({ tResoolves: tResolves });
};

asyncCall();

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
