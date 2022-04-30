/**
 * If you want to run this locally (recommended): *
 * - cd to the a directory that you want to be the parent of this project.
 * - $ git clone git@github.com:mjvandermeulen/codingawesomeness.git
 * - $ npm install
 * - $ see README.md how to run this
 *
 * EXERCISE 1:
 *
 * - Pretend you can make a million dollars by solving this excersise in one try.
 * - Don't casually do some trial and error, it has to hurt your brain a bit.
 * - Uncomment console.log(`${site} loaded`)
 * - Replace the 0s in the 'NUMBER 0' console.logs with the correct number, so
 *     that when running this file, the logs will display NUMBER 1, NUMBER 2,
 *     NUMBER 3 etc in the correct order.
 *
 * EXERCISE 2:
 * - uncomment the 'doesnotexist.com' loadsite line, which is called after the google line
 *     and notice what happens. (quite enjoyable, if I may say so myself)
 *
 */

import { promisePretendLoad } from "./promises";

function loadSite(site: string) {
  console.log("NUMBER 0");
  promisePretendLoad(site)
    .then(function (result) {
      console.log("NUMBER 0");
      console.log(`${site} loaded with\n  "${result}"`);
    })
    .catch(function (error) {
      console.log("NUMBER 0");
      console.log(`An error occured loading site ${site} \n error: ${error}`);
    });
  console.log("NUMBER 0");
}

console.log("NUMBER 0");
// loadSite("http://google.com");
loadSite("doesnotexist.com");
console.log("NUMBER 0");
