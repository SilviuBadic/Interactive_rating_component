let chosedNumber;
let submitBtn = document.getElementById('submit_btn');
let numberX = document.getElementById('numberX');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');

button1.onclick = function(){
  chosedNumber = 1;
  button1.style.backgroundColor = "hsl(25, 97%, 53%)";
  button1.style.color = "hsl(216, 12%, 8%)";
  button2.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.backgroundColor = "hsl(215, 19%, 27%)";
  button2.style.color = "hsl(0, 0%, 100%)";
  button3.style.color = "hsl(0, 0%, 100%)";
  button4.style.color = "hsl(0, 0%, 100%)";
  button5.style.color = "hsl(0, 0%, 100%)";
}

  button2.onclick = function(){
  chosedNumber = 2;
  button2.style.backgroundColor = "hsl(25, 97%, 53%)";
  button2.style.color = "hsl(216, 12%, 8%)";
  button1.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.backgroundColor = "hsl(215, 19%, 27%)";
  button1.style.color = "hsl(0, 0%, 100%)";
  button3.style.color = "hsl(0, 0%, 100%)";
  button4.style.color = "hsl(0, 0%, 100%)";
  button5.style.color = "hsl(0, 0%, 100%)";
  }

  button3.onclick = function(){
    chosedNumber = 3;
    button3.style.backgroundColor = "hsl(25, 97%, 53%)";
    button3.style.color = "hsl(216, 12%, 8%)";
    button1.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.backgroundColor = "hsl(215, 19%, 27%)";
    button4.style.backgroundColor = "hsl(215, 19%, 27%)";
    button5.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.color = "hsl(0, 0%, 100%)";
    button1.style.color = "hsl(0, 0%, 100%)";
    button4.style.color = "hsl(0, 0%, 100%)";
    button5.style.color = "hsl(0, 0%, 100%)";
  }

  button4.onclick = function(){
    chosedNumber = 4;
    button4.style.backgroundColor = "hsl(25, 97%, 53%)";
    button4.style.color = "hsl(216, 12%, 8%)";
    button1.style.backgroundColor = "hsl(215, 19%, 27%)";
    button3.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.backgroundColor = "hsl(215, 19%, 27%)";
    button5.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.color = "hsl(0, 0%, 100%)";
    button3.style.color = "hsl(0, 0%, 100%)";
    button5.style.color = "hsl(0, 0%, 100%)";
    button1.style.color = "hsl(0, 0%, 100%)";
  }

  button5.onclick = function(){
    chosedNumber = 5;
    button5.style.backgroundColor = "hsl(25, 97%, 53%)";
    button5.style.color = "hsl(216, 12%, 8%)";
    button1.style.backgroundColor = "hsl(215, 19%, 27%)";
    button3.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.backgroundColor = "hsl(215, 19%, 27%)";
    button4.style.backgroundColor = "hsl(215, 19%, 27%)";
    button2.style.color = "hsl(0, 0%, 100%)";
    button3.style.color = "hsl(0, 0%, 100%)";
    button4.style.color = "hsl(0, 0%, 100%)";
    button1.style.color = "hsl(0, 0%, 100%)";
  }

const submitting = submitBtn.onclick = () => {
  numberX.innerHTML = numberX;
}

function toggle(){
  let x = document.getElementById("main_frame");
  let y = document.getElementById("main_frame2");
  if(chosedNumber >= 1 && chosedNumber <= 5){
    x.style.display = "none";
    y.style.display = "block";
    numberX.innerHTML = chosedNumber;
  }
  else{
    x.style.display = "block";
    y.style.display = "none";
    alert("Please click a number first!")
  }
}


function hoveringItems1(){
    button1.style.backgroundColor = "hsl(0, 0%, 100%)";
    button2.style.backgroundColor = "hsl(215, 19%, 27%)";
    button3.style.backgroundColor = "hsl(215, 19%, 27%)";
    button4.style.backgroundColor = "hsl(215, 19%, 27%)";
    button5.style.backgroundColor = "hsl(215, 19%, 27%)";
    button1.style.color = "hsl(216, 12%, 8%)";
    button2.style.color = "hsl(0, 0%, 100%)";
    button3.style.color = "hsl(0, 0%, 100%)";
    button4.style.color = "hsl(0, 0%, 100%)";
    button5.style.color = "hsl(0, 0%, 100%)";
}

function hoveringItems2(){
  button2.style.backgroundColor = "hsl(0, 0%, 100%)";
  button1.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.backgroundColor = "hsl(215, 19%, 27%)";
  button2.style.color = "hsl(216, 12%, 8%)";
  button1.style.color = "hsl(0, 0%, 100%)";
  button3.style.color = "hsl(0, 0%, 100%)";
  button4.style.color = "hsl(0, 0%, 100%)";
  button5.style.color = "hsl(0, 0%, 100%)";
}

function hoveringItems3(){
  button3.style.backgroundColor = "hsl(0, 0%, 100%)";
  button2.style.backgroundColor = "hsl(215, 19%, 27%)";
  button1.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.color = "hsl(216, 12%, 8%)";
  button2.style.color = "hsl(0, 0%, 100%)";
  button1.style.color = "hsl(0, 0%, 100%)";
  button4.style.color = "hsl(0, 0%, 100%)";
  button5.style.color = "hsl(0, 0%, 100%)";
}

function hoveringItems4(){
  button4.style.backgroundColor = "hsl(0, 0%, 100%)";
  button2.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.backgroundColor = "hsl(215, 19%, 27%)";
  button1.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.color = "hsl(216, 12%, 8%)";
  button2.style.color = "hsl(0, 0%, 100%)";
  button3.style.color = "hsl(0, 0%, 100%)";
  button1.style.color = "hsl(0, 0%, 100%)";
  button5.style.color = "hsl(0, 0%, 100%)";
}

function hoveringItems5(){
  button5.style.backgroundColor = "hsl(0, 0%, 100%)";
  button2.style.backgroundColor = "hsl(215, 19%, 27%)";
  button3.style.backgroundColor = "hsl(215, 19%, 27%)";
  button4.style.backgroundColor = "hsl(215, 19%, 27%)";
  button1.style.backgroundColor = "hsl(215, 19%, 27%)";
  button5.style.color = "hsl(216, 12%, 8%)";
  button4.style.color = "hsl(0, 0%, 100%)";
  button3.style.color = "hsl(0, 0%, 100%)";
  button2.style.color = "hsl(0, 0%, 100%)";
  button1.style.color = "hsl(0, 0%, 100%)";
}