const span = document.querySelector(".js-screen-width");

const height = window.screen.height * window.devicePixelRatio;
const width = window.screen.width * window.devicePixelRatio;

span.textContent = `${height}x${width}`;

window.addEventListener("resize", function (event) {
  const height = window.screen.height * window.devicePixelRatio;
  const width = window.screen.width * window.devicePixelRatio;

  span.textContent = `${height}x${width}`;
});


window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./worker.js');
  }
}