import "babel-polyfill";
import { getAdvice } from "./advice";
const randomAdvice = document.querySelector(".random-advice");
const result = document.querySelector(".advice");

randomAdvice.addEventListener("click", () => {
  getAdvice().then(data => {
    console.log(data.slip.advice);
    const randomAdvice = data.slip.advice;
    result.innerHTML = randomAdvice;
  });
});
