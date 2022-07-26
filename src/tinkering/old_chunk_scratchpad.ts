// export const chunk = <T>(
//   array: Array<T>,
//   chunkSize: number
// ): Array<Array<T>> => {
//   const chunked: Array<Array<T>> = [];
//   let chunkedArray: Array<T> = [];

//   for (let i = 0; i < array.length; i++) {
//     if ((i + 1) % chunkSize === 0) {
//       chunked.push(chunkedArray);
//       chunkedArray = [array[i]];
//     } else {
//       chunkedArray.push(array[i]);
//     }
//   }

//   if (chunkedArray.length > 0) {
//     chunked.push(chunkedArray);
//   }

//   return chunked;
// };
export const chunk = <T>(arr: Array<T>, size: number): Array<Array<T>> => {
  if (arr.length == 0) return [];
  if (size <= 0) return [arr];
  return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, (i + 1) * size)
  );
};

// const testArray: number[] = [];

// for (let i = 0; i < 16; i++) {
//   testArray.push(i);
// }
// console.log({ testA: testArray });

// const cA = chunk(testArray, size);
// console.log({ cA });

for (let size = 0; size <= 3; size++) {
  console.log("*******************");
  console.log("SIZE: " + size);
  for (let l = 0; l <= 4; l++) {
    console.log("            length: " + l);
    const testA = Array.from({ length: l }, (_v, i) => i + 1);
    const result = chunk(testA, size);
    console.log({ result });
  }
}

// console.log({ length: 5 });
