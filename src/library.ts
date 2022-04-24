export const promisePretendLoad = (site: string) => {
  // pretends to load a site. Clever!
  // returns a promise
  return new Promise((resolve, reject) => {
    console.log("Promise A");
    setTimeout(() => {
      console.log("Promise B");
      if (site != "doesnotexist.com") {
        console.log("Promise C");
        resolve(`${site} here, I just want to say ${randomWords(10, 0.9)}`);
        console.log("Promise C1");
      } else {
        console.log("Promise D");
        reject("What a pitty");
        console.log("Promise D1");
      }
      reject("boohoo");
      // resolve("again");
      console.log("Promise B1");
    }, 500);
    console.log("Promise E");
  });
};

export const promisePretendLanguageCheck = (text: string) => {
  return new Promise((resolve, reject) => {
    console.log("Promise A");
    setTimeout(() => {
      console.log("Promise B");
      if (text != "doesnotexist.com") {
        console.log("Promise C");
        resolve(`${site} here, I just want to say ${randomWords(1)}`);
        console.log("Promise C1");
      } else {
        console.log("Promise D");
        reject("What a pitty");
        console.log("Promise D1");
      }
      reject("boohoo");
      // resolve("again");
      console.log("Promise B1");
    }, 500);
    console.log("Promise E");
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

export const hasBadWords = (text: string): number => {
  const badList = badWords.split(" ");
  return badList.some((word) => {
    const regex = new RegExp(word, "i");
    return regex.test(text);
  });
};

const lorem_text =
  "Lorem Consequat mollit consectetur aliquip duis dolor voluptate qui duis ad cillum aliqua pariatur reprehenderit. Reprehenderit excepteur reprehenderit ipsum amet. Laborum ut aute do laborum tempor tempor minim. Est culpa occaecat adipisicing ut cillum cillum esse et velit Lorem nostrud elit proident commodo. Culpa laboris cillum magna nostrud proident cupidatat enim non aute. Cupidatat culpa labore quis exercitation excepteur reprehenderit in aliqua irure adipisicing quis officia. Consectetur laboris fugiat aliquip aliquip id enim elit culpa occaecat. Aliquip consectetur aliquip Lorem proident adipisicing irure ullamco. Irure dolor consectetur veniam exercitation consectetur do anim velit amet dolor sunt do labore. Amet proident consequat occaecat amet ut excepteur nostrud culpa id adipisicing. Proident ad est irure aliquip magna aute qui. Dolor eu laborum consequat velit consectetur amet nulla officia pariatur aute. Sunt eu veniam velit laborum dolor laboris cupidatat aute officia. Exercitation exercitation excepteur cupidatat in exercitation ad nisi tempor. Elit velit magna laboris amet elit do labore do culpa ex labore quis. Tempor Lorem esse laborum aliquip. Veniam minim deserunt occaecat labore est ea aute tempor id duis laboris. Reprehenderit dolore incididunt pariatur veniam exercitation voluptate amet aute. Qui esse aute velit proident id aute non dolore mollit consectetur deserunt mollit labore. Dolore cillum sint excepteur tempor in consectetur ea aliqua culpa occaecat. Tempor occaecat esse voluptate minim voluptate. Pariatur reprehenderit enim esse exercitation sit consequat elit eiusmod. Dolore magna occaecat Lorem adipisicing nostrud aliqua ullamco cillum. Aute exercitation do quis voluptate eiusmod. Consectetur mollit anim ea sint duis sint laboris magna nulla officia. Aute fugiat fugiat amet sint labore. Sint sint qui ex velit tempor nisi ullamco laboris do fugiat ut magna. Magna eiusmod amet esse esse ad tempor amet ipsum do et occaecat eiusmod. Nulla veniam commodo et proident. Exercitation irure tempor officia nulla labore officia aute sunt laboris nisi sint cillum tempor magna. Reprehenderit nostrud adipisicing quis elit eiusmod consectetur amet cupidatat labore laborum.";
const badWords = "poop butt"; // This list is not exhaustive for multiple valid reasons.

const loremList = lorem_text.split(" ");
const badList = badWords.split(" ");
