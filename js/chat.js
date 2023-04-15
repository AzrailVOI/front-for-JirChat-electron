
const textmess = document.querySelector('.main-chatarea-textarea-outtext-element-text');
const textmessarea = document.querySelector(".main-chatarea-textarea-outdiv")
const messarea = document.querySelector(".main-chatarea-messages")
console.log(textmess, textmessarea)
let previousHeight = textmess.offsetHeight;
let previousWidth = textmess.offsetWidth;
let previousHeightArea = textmessarea.offsetHeight;
let messareaH = messarea.offsetHeight;

const socket = io("http://192.168.43.247:3000/");

socket.on('connect', () => {
  console.log('connected');
});

setInterval(() => {
  const currentHeight = textmess.offsetHeight;
  const currentWidth = textmess.offsetWidth;

  if (currentHeight !== previousHeight || currentWidth !== previousWidth) {
    console.log('Перенос строки произошел');
    previousHeight = currentHeight;
    previousWidth = currentWidth;
    console.log(previousHeight)
    textmessarea.style.height = previousHeightArea + currentHeight + "px";
    messarea.style.height = messareaH - currentHeight + "px";
  }
}, 1);
