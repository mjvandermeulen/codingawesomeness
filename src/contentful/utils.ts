import { writeFile } from "fs/promises";

// https://stackoverflow.com/a/37041756
export const arraysIntersection = (a: any[], b: any[]) => {
    const setB = new Set(b);
    return [...new Set(a)].filter((x) => setB.has(x));
};

// avoids duplicates in both a and b, by using Sets
export const aAndNotB = (a: any[], b: any[]) => {
    const setB = new Set(b);
    return [...new Set(a)].filter((x) => !setB.has(x));
};

function dateFileName() {
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const hours = ("0" + t.getHours()).slice(-2);
    const minutes = ("0" + t.getMinutes()).slice(-2);
    // const seconds = ('0' + t.getSeconds()).slice(-2);
    return `${year}${month}${date}${hours}${minutes}`;
}

// works for any Object....
export const writeAssetIDsArrayToFile = async (
    a: string[],
    fileName: string
) => {
    try {
        await writeFile(`${dateFileName()}${fileName}.json`, JSON.stringify(a));
    } catch (err) {
        console.log(err);
    }
};
