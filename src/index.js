import "babel-polyfill";
import { getAdvice } from "./advice";
const randomAdviceElement = document.querySelector(".random-advice");
const result = document.querySelector(".advice");

let timeoutHandle = null;
randomAdviceElement.addEventListener("click", () => {
  getAdvice().then(data => {
    clearTimeout(timeoutHandle);
    result.innerHTML = "";
    console.log(data.slip.advice);
    const randomAdvice = data.slip.advice;
    result.innerHTML = randomAdvice;
    randomAdviceElement.classList.add("random-advice-cracked");
    timeoutHandle = setTimeout(() => {
      randomAdviceElement.classList.remove("random-advice-cracked");
    }, 1000);
  });
});
