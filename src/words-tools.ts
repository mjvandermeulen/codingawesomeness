import { badList, loremList } from "./words-config";

const randomWord = (list: string[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const randomWords = (numberOfWords: number, languageChance = 0) => {
  const languagePerPickChance =
    1 - Math.pow(1 - languageChance, 1 / numberOfWords);
  let words = "";
  for (let i = 0; i < numberOfWords; i++) {
    if (Math.random() < languagePerPickChance) {
      words += " " + randomWord(badList);
    } else {
      words += " " + randomWord(loremList);
    }
  }
  return words.trim();
};

export const cleanedUpWords = (text: string): [string, number] => {
  let strippedText = text;
  let count = 0;

  badList.forEach((word) => {
    const regex = new RegExp(word, "ig");
    const nextText = strippedText.replace(regex, "*%&#*?!");
    if (nextText != strippedText) {
      count++;
      strippedText = nextText;
    }
  });
  return [strippedText, count];
};
