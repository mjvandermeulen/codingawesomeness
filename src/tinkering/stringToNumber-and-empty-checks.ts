export const convertStringNumberToInteger = (number: any): number => {
    return typeof number === "string"
        ? parseInt(number.replace(/,/g, ""), 10)
        : parseInt(number, 10);
};

export const convertStringNumberToIntegerNEW = (number: any): number => {
    const strippedNumber = (typeof number === "string") ? number.replace(/,/g, "") : number
    const returnValue = parseInt(strippedNumber)
    if (Number.isNaN(returnValue)) {
        return 0; 
    } else {
        return returnValue
    }
};

const tests = ["", "0", "1", "1a", "a1", 0, 1, 34, null, undefined]

for (const test of tests) {
    const first = convertStringNumberToInteger(test);
    const second = convertStringNumberToIntegerNEW(test);
    console.log(
        `Test: ${test}. First-Second: ${first}-${second}. typeoff f-s ${typeof first} ${typeof second}`
    );
}

const hello = {world: "'sup?", empty: ""}
if (hello.empty) {
    console.log("empty evals to true...")
} else {
    console.log("empty evals to false...")
}

if (hello?.empty?.length > 0) {
    console.log("length evals to true...")
} else {
    console.log("length evals to false...")
}

if (hello.world) {
    console.log("world evals to true...")
} else {
    console.log("world evals to false...")
}

if (hello?.world?.length > 0) {
    console.log("length evals to true...")
} else {
    console.log("length evals to false...")
}
