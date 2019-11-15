import "babel-polyfill";
import { getAdvice } from "./advice";
const randomAdvice = document.querySelector(".random-advice");
const result = document.querySelector(".advice");

randomAdvice.addEventListener("click", () => {
  getAdvice().then(data => {
    console.log(data.slip.advice);
    const randomAdvice = data.slip.advice;
    // const button = document.getElementsByClassName(".random-advice");
    // button.style.background = "url(./resource/fortunecookie_broken.png)";
    result.innerHTML = randomAdvice;
  });
});

// const button = document.getElementsByClassName(".random-advice")[0];
// button.addEventListener("click", function() {
//   button.style.backgroundImage = "scr(./resource/fortunecookie_broken.png)";
// });
