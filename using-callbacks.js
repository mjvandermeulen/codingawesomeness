import { callbacksPretendLoad } from "./library.js";

console.log("NUMBER 1");

function loadSite(site) {
  console.log("NUMBER 3");
  callbacksPretendLoad(
    site,
    function (loaded_content) {
      console.log("NUMBER 6a");
      console.log(site + " loaded. Content: " + loaded_content);
    },
    function (error) {
      console.log("NUMBER 6b");
      console.log(
        "An error occured loading site " + site + ". Error: " + error
      );
    }
  );
  console.log("NUMBER 4");
}

console.log("NUMBER 2");
loadSite("http://google.com");
loadSite("doesnotexist.com");
console.log("NUMBER 5");
