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
    // console.log("pr1",previousHeight)
    // console.log('Перенос строки произошел', previousHeightArea, messareaH, currentHeight);
    previousHeight = currentHeight;
    // console.log("pr2",previousHeight)

    textmessarea.style.height = previousHeightArea + currentHeight + "px";
    messarea.style.height = messareaH - currentHeight + "px";


    // console.log('Перенос строки произошел 2', textmessarea.style.height, messarea.style.height, currentHeight/2);
  }

})