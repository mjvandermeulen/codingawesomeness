// // const good = randomWords(4);
// // const bad = randomWords(1, true);
// const realLife = randomWords(3) + maybeABadWord();

// // console.log({ good });
// // console.log({ bad });
// console.log({ realLife });

// // console.log(hasBadWords(good));
// // console.log(hasBadWords(bad));
// console.log(hasBadWords(realLife));
console.log("boo");
const numberOfWords = 2;
const steps = 11;
for (let i = 0; i <= steps - 1; i++) {
  const totalChance = i / (steps - 1);
  const chance = 1 - Math.pow(1 - totalChance, 1 / numberOfWords);
  console.log({ totalChance });
  console.log({ chance });
}
