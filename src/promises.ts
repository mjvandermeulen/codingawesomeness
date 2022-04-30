import { cleanedUpWords, randomWords } from "./words-tools";

export const promisePretendLoad = (site: string): Promise<string> => {
  // pretends to load a site. Clever!
  // returns a promise
  return new Promise((resolve, reject) => {
    console.log("Number 0");
    setTimeout(() => {
      console.log("Number 0");
      if (site != "doesnotexist.com") {
        console.log("Number 0");
        resolve(`Site ${site} provided this content.`);
        console.log("Number 0");
      } else {
        console.log("Number 0");
        reject("Unknown error. Sorry.");
        console.log("Number 0");
      }
      // reject("Bonus reject 1");
      // resolve("Bonus resolve 1");
      console.log("Number 0");
    }, 500);
    console.log("Number 0");
    // reject("Bonus reject 2");
    // resolve("Bonus resolve 2");
  });
};

export const promiseRandomLoad = (site: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log("Promise 0");
    setTimeout(() => {
      if (site != "doesnotexist.com") {
        resolve(
          `Site ${site} provided these random words: ${randomWords(10, 0.7)}`
        );
      } else {
        reject("Unknown error loading random words");
      }
    }, 500);
  });
};

export const promisePretendLanguageCheck = (
  text: string
): Promise<[string, number]> => {
  // only the resolve Promise return type is specified above!
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Something randomly went wrong");
      } else {
        resolve(cleanedUpWords(text));
      }
    }, 500);
  });
};

export function callbacksPretendLoad(
  site: string,
  handleSucces: (content: string) => void,
  handleError: (content: string) => void
) {
  // pretends to load a site
  // takes handlers of success and fail as 2nd and 3rd arguments
  setTimeout(function () {
    if (site != "doesnotexist.com") {
      const dummyContent = randomWords(3);
      handleSucces(dummyContent);
    } else {
      handleError("Could not load " + site);
    }
  });
}
