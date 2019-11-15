import "babel-polyfill";
import { getAdvice } from "./advice";
const randomAdvice = document.querySelector(".random-advice");
const result = document.querySelector(".advice");

randomAdvice.addEventListener("click", () => {
  getAdvice().then(data => {
    console.log(data);
    const randomAdvice = JSON.stringify(data[0].advice);
    result.innerHTML = randomAdvice;
  });
});
