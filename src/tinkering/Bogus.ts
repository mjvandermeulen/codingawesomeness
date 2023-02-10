class Bogus {
    static double = (a: string) => {
        console.log(`a: ${a}`);
    };
    // @ts-ignore
    static double = (b: string) => {
        console.log(`b: ${b}`);
    };
}
class BogusTwo {
    static triple = (a: string) => {
        console.log(`a: ${a}`);
    };
}

// @ts-ignore
// export default BogusTwo;
// @ts-ignore
export default Bogus;
