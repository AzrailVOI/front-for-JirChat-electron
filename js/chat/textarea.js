// const textmess = document.getElementById('type-mess');
const textmessarea = document.querySelector(".main-chatarea-textarea-outdiv")
const messarea = document.querySelector(".main-chatarea-messages")
let previousHeight = textmess.offsetHeight;
let previousHeightArea = textmessarea.offsetHeight;
let messareaH = messarea.offsetHeight;





const currentHeight = textmess.offsetHeight;
textmessarea.style.height = previousHeightArea + currentHeight + "px";
messarea.style.height = messareaH - currentHeight + "px";
textmess.addEventListener('input', ()=>{
  const currentHeight = textmess.offsetHeight;
  if (currentHeight !== previousHeight) {
    previousHeight = currentHeight;
    textmessarea.style.height = previousHeightArea + currentHeight + "px";
    messarea.style.height = messareaH - currentHeight + "px";
  }

})