/**
 * If you want to run this locally (recommended): *
 * - cd to the correct parent directory.
 * - $ git clone git@github.com:mjvandermeulen/codingawesomeness.git
 * - $ npm install
 * - $ node using-promises.js
 *
 * EXERCISE 1:
 *
 * - Pretend you can make a million dollars by solving this excersize in one try.
 * - Don't casually do some trial and error, it has to hurt your brain a bit.
 * - Uncomment console.log(`${site} loaded`)
 * - Replace the 0s in the 'NUMBER 0' console.logs with the correct number, so
 *     that when running this file, the logs will display NUMBER 1, NUMBER 2,
 *     NUMBER 3 etc in the correct order.
 *
 * EXERCISE 2:
 * - uncomment the 'bogus' loadsite line, which is called after the google line
 *     and notice what happens. (quite enjoyable, if I may say so myself)
 *
 */

const fetch = require("node-fetch");

function loadSite(site) {
  console.log("NUMBER 0");
  fetch(site)
    .then(function () {
      console.log("NUMBER 0");
      //   console.log(`${site} loaded`)
    })
    .catch(function (_) {
      console.log("NUMBER 0");
      console.log(`An error occured loading site ${site}`);
    });
  console.log("NUMBER 0");
}

console.log("NUMBER 0");
loadSite("http://google.com");
// loadSite('bogus')
console.log("NUMBER 0");
