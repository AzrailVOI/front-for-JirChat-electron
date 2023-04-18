const socket = io("http://192.168.3.6:5000/");
const $sendBtn = document.getElementById('send')
const $smileBtn = document.getElementById('smile')
const textmess = document.getElementById('type-mess')
const chat = document.getElementById('messarea');
chat.scrollTop = chat.scrollHeight;

var user_ID = ''
socket.on('userID', id=>{
  console.log(id)
  user_ID = id
})


function renderMessage(who, text) {
return `
<div class="main-chatarea-messages-item ${who}">${text}</div>
`
}


function sendMessage() {
  console.log(user_ID)
  let message_text = textmess.innerText
  if (message_text !== ''){
    console.log(message_text)
    chat.insertAdjacentHTML("beforeend", renderMessage('me', message_text))
    chat.scrollTop = chat.scrollHeight;
    socket.emit('user-message', message_text)
  }
  textmess.innerHTML = ''
  const currentHeight = textmess.offsetHeight;
  textmessarea.style.height = previousHeightArea + currentHeight + "px";
  messarea.style.height = messareaH - currentHeight + "px";
}


textmess.addEventListener('keydown', function (e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    sendMessage()
  }
});
$sendBtn.addEventListener('click', ()=>{
  sendMessage()
})
socket.on('some-message', answer=>{
  if (answer.id !== user_ID){
    chat.insertAdjacentHTML("beforeend", renderMessage('some', answer.text))
    chat.scrollTop = chat.scrollHeight;
  }
})