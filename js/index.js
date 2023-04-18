const socket = io("http://192.168.3.6:5000/");
// const { shell } = require('electron');
socket.on('connect', () => {
  console.log('connected');
});

const btn = document.getElementById('formBtn')
const userInput = document.getElementById('username')
const passInput = document.getElementById('password')
const roomInput = document.getElementById('room')
var userData={
    username: this.username,
    password: this.password,
    room: this.room
}
btn.addEventListener('click', ()=>{
    userData.password = passInput.value
    userData.username = userInput.value
    userData.room = roomInput.value
    socket.emit('authForm', userData)
})
socket.on('apo', mess=>{
    console.log(mess)
})
socket.on('authFormServer', status=>{
    status ? window.location.href = "chat.html" : console.log('Error')
})
