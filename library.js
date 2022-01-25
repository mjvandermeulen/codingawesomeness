export const promisePretendLoad = (site) => {
  // pretends to load a site. Clever!
  // returns a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (site != "doesnotexist.com") {
        resolve(random_words(3));
      } else {
        reject("What a pitty");
      }
    }, 500);
  });
};

export function callbacksPretendLoad(site, handleSucces, handleError) {
  // pretends to load a site
  // takes handlers of success and fail as 2nd and 3rd arguments
  setTimeout(function () {
    if (site != "doesnotexist.com") {
      const dummyContent = random_words(3);
      handleSucces(dummyContent);
    } else {
      handleError("Could not load " + site);
    }
  });
}

export const random_words = (numberOfWords) => {
  const list = lorem_text.split(" ");
  let words = "";
  for (let i = 0; i < numberOfWords; i++) {
    words += " " + list[Math.floor(Math.random() * list.length)];
  }
  return words.trim();
};

const lorem_text = `loremConsequat mollit consectetur aliquip duis dolor voluptate qui duis ad cillum aliqua pariatur reprehenderit. Reprehenderit excepteur reprehenderit ipsum amet. Laborum ut aute do laborum tempor tempor minim. Est culpa occaecat adipisicing ut cillum cillum esse et velit Lorem nostrud elit proident commodo. Culpa laboris cillum magna nostrud proident cupidatat enim non aute. Cupidatat culpa labore quis exercitation excepteur reprehenderit in aliqua irure adipisicing quis officia.

Consectetur laboris fugiat aliquip aliquip id enim elit culpa occaecat. Aliquip consectetur aliquip Lorem proident adipisicing irure ullamco. Irure dolor consectetur veniam exercitation consectetur do anim velit amet dolor sunt do labore. Amet proident consequat occaecat amet ut excepteur nostrud culpa id adipisicing. Proident ad est irure aliquip magna aute qui. Dolor eu laborum consequat velit consectetur amet nulla officia pariatur aute.

Sunt eu veniam velit laborum dolor laboris cupidatat aute officia. Exercitation exercitation excepteur cupidatat in exercitation ad nisi tempor. Elit velit magna laboris amet elit do labore do culpa ex labore quis.

Tempor Lorem esse laborum aliquip. Veniam minim deserunt occaecat labore est ea aute tempor id duis laboris. Reprehenderit dolore incididunt pariatur veniam exercitation voluptate amet aute. Qui esse aute velit proident id aute non dolore mollit consectetur deserunt mollit labore. Dolore cillum sint excepteur tempor in consectetur ea aliqua culpa occaecat.

Tempor occaecat esse voluptate minim voluptate. Pariatur reprehenderit enim esse exercitation sit consequat elit eiusmod. Dolore magna occaecat Lorem adipisicing nostrud aliqua ullamco cillum. Aute exercitation do quis voluptate eiusmod.

Consectetur mollit anim ea sint duis sint laboris magna nulla officia. Aute fugiat fugiat amet sint labore. Sint sint qui ex velit tempor nisi ullamco laboris do fugiat ut magna. Magna eiusmod amet esse esse ad tempor amet ipsum do et occaecat eiusmod. Nulla veniam commodo et proident. Exercitation irure tempor officia nulla labore officia aute sunt laboris nisi sint cillum tempor magna. Reprehenderit nostrud adipisicing quis elit eiusmod consectetur amet cupidatat labore laborum.
`;
