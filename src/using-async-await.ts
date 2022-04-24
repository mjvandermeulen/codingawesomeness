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
 * - uncomment the 'doesnotexist.com' loadsite line, which is called after the google line
 *     and notice what happens. (quite enjoyable, if I may say so myself)
 *
 */

import { promisePretendLoad } from "./library.js";

const loadSite = async (site: string) => {
  // ****** KINDA LEFT OFF HERE:
  // This is informative, but not practical:
  // usually you would return the content OR an error, not the status
  let status = "";
  console.log("NUMBER 3");
  try {
    await promisePretendLoad(site); // NOTICE the crucial "await"
    console.log(`${site} loaded`);
    console.log("NUBMER 5a");
    status += `${site} success`;
  } catch (error) {
    console.log("NUMBER 5b");
    console.log(`An error occured loading site ${site}`);
    status += `${site} error loading site`;
  } finally {
    console.log("NUMBER 6");
    status += `\n${site} and more processing in finally`;
  }
  console.log("NUMBER 7");
  status += `\n${site} and some wrapping up at end of loadSite`;
  return status;
};

const main = async () => {
  console.log("NUMBER 2");
  let status = await loadSite("http://google.com");
  status += "\n";
  status += await loadSite("doesnotexist.com");
  console.log("NUMBER 8");
  console.log(`Status:\n${status}`);
};

console.log("NUMBER 1");
main();
console.log("NUMBER 4");
