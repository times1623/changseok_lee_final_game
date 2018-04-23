// JavaScript Document

var monster = document.getElementById('monster');
var button = document.getElementById('start');
var soilder = document.getElementById('soilder');
var again = document.getElementById('again');
var follow = document.getElementById('tracking');
var speed = 10;
var starting = 0;



function bugMove() {
  var pos = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos == 750) {
      clearInterval(id);
      alert('Bugs invade the Earth');
    } else {
      pos++;
      monster.style.left = pos + 'px';
    }
  }
}



button.addEventListener('click', bugMove);
again.addEventListener('click', ()=> window.location.reload())
