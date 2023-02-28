import "./index.html";
import "./index.scss";
import code from './img/code.png'
import some from "./modules/calc";

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

document.addEventListener("DOMContentLoaded", (e) => {
  initApp();

  async function initApp() {
    console.log("JS works");
    console.log("some", some);
  }
});
