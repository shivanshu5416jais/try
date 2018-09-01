
var canvas = document.querySelector("#canvas");
var cx = canvas.getContext("2d");
var isFire1 = false;
var isFire2 = false;
var score1 = 0;
var score2 = 0;
var remChances1 = 5;
var remChances2 = 5;
var angle1 = Math.PI / 2;
var angle2 = Math.PI / 2;
var weapon1 = "Weapon1";
var weapon2 = "Weapon1";

// var myMusic;

// texts for display
function displayText() {
  cx.font = "35px Verdana";
  cx.fillStyle = "red";
  cx.textAlign = "left";
  cx.fillText("Player 1", 20, 30);

  cx.font = "30px Verdana";
  cx.fillStyle = "white";
  cx.textAlign = "left";
  cx.fillText(`SCORE : ${score1}`, 20, 70);

  cx.font = "30px Verdana";
  cx.fillStyle = "#f5df65";
  cx.fillText(`Chances : ${remChances1} `, 20, 110);

  // Player2 info

  cx.font = "35px Verdana";
  cx.fillStyle = "red";
  cx.textAlign = "right";
  cx.fillText("Player 2", canvas.width - 20, 30);

  cx.font = "30px Verdana";
  cx.fillStyle = "white";
  cx.textAlign = "right";
  cx.fillText(`SCORE : ${score2}`, canvas.width - 20, 70);

  cx.font = "30px Verdana";
  cx.fillStyle = "#f5df65";
  cx.textAlign = "right";
  cx.fillText(`Chances : ${remChances2} `, canvas.width - 20, 110);
}

// Weapon Selector
function changeWeapon() {
  if (document.getElementById("weapon-selector").value == "Weapon1") {
    weapon1 = "Weapon1";
    weapon2 = "Weapon1";
  }
  if (document.getElementById("weapon-selector").value == "Weapon2") {
    weapon1 = "Weapon2";
    weapon2 = "Weapon2";
  }
  // if (document.getElementById("weapon-selector").value == "Weapon3") {
  //   weapon1 = "Weapon3";
  //   weapon2 = "Weapon3";
  // }
}
// click fire action
const fire = document.querySelector("#fire-weapon");
fire.addEventListener("click", function () {
  // document.getElementById("t2").src = "t1.png";
  // document.getElementById("t1").src = "t2.png";
  if (remChances1 == 5) {
    isFire1 = true;
    if (remChances1 >= 1) {
      remChances1--;
    }
    isFire2 = false;
  } else if (isFire1 && !isFire2) {
    isFire2 = true;
    if (remChances2 >= 1) {
      remChances2--;
    }
    isFire1 = false;
  } else if (!isFire1 && isFire2) {
    isFire1 = true;
    if (remChances1 >= 1) {
      remChances1--;
    }
    isFire2 = false;
  }
});
//Slider for Angle
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "deg";

slider.oninput = function () {
  output.innerHTML = `${this.value}deg`;
  angle1 = Math.PI * this.value / 180;//for tank 1
  angle2 = Math.PI * this.value / 180;//for tank 2
};

 //for projectile-one
var x1;
var y1;
var u1 ;
changePower();
var time1 = 0.01;
var timeOfFlight1 = 2 * u1 * Math.sin(angle1) / 10;

// resetProjectileOne
function resetProjectileOne() {
  x2 = 0;
  y2 = 0;
  changePower();
  time2 = 0.01;
  timeOfFlight2 = 2 * u2 * Math.sin(angle2) / 10;
}

// For  Projectile Two
var x2;
var y2;
var u2 ;
changePower();
var time2 = 0.01;
var timeOfFlight2 = 2 * u2 * Math.sin(angle2) / 10;

// reset projectile two
function resetProjectileTwo() {
  x1 = 0;
  y1 = 0;
  changePower();
  time1 = 0.01;
  timeOfFlight1 = 2 * u1 * Math.sin(angle1) / 10;
}
//for speed
 function changePower() {
  if (document.getElementById("power-selector").value == "weak") {
    u1 = 50;
    u2 = 50;
  }
  if (document.getElementById("power-selector").value == "normal") {
    u1 = 70;
    u2 = 70;
  }
  if (document.getElementById("power-selector").value == "strong") {
    u1 = 85;
    u2 = 85;
  }
}

//Calculate projectile position for tank one
function calcPositionOne() {
  x1 = u1 * Math.cos(angle1) * time1;
  y1 = -(u1 * Math.sin(angle1) * time1 - 0.5 * 10 * time1 * time1);
}

// Draw Projectile-one
function drawProjectileOne() {
  calcPositionOne();
  
  if (true) {
    time1 += 0.15;

      if(weapon1=="Weapon1")
    {
      cx.beginPath();
      cx.arc(240 + x1, 500 + y1, 8, 0,12);
      cx.fillStyle = "yellow";
      cx.fill();
      cx.closePath();
    }
   else if(weapon1=="Weapon2")
   {
    cx.beginPath();
      cx.arc(240 + x1, 500 + y1, 8, 0,12);
      cx.fillStyle = "red";
      cx.fill();
      cx.closePath();
   }
  }
  if (240 + x1 > 730 && 240 + x1 < 810 && 500 + y1 > 487)
   {
    
      score1 += 500;
    }
  
      

    }
// For tank-two
function calcPositionTwo() {
  x2 = -u2 * Math.cos(angle2) * time2;
  y2 = -(u2 * Math.sin(angle2) * time2 - 0.5 * 10 * time2 * time2);
}

// Draw Projectile-two
function drawProjectileTwo() {
  calcPositionTwo();
  if (true) {
    time2 += 0.15;
    if(weapon2=="Weapon1")
    {
      cx.beginPath();
      cx.arc(740 + x2, 500 + y2, 8, 0, 7);
      cx.fillStyle = "yellow";
      cx.fill();
      cx.closePath();
    }
   else if(weapon2=="Weapon2")
   {
    cx.beginPath();
      cx.arc(740 + x2, 500 + y2, 8, 0, 7);
      cx.fillStyle = "red";
      cx.fill();
      cx.closePath();
   }
  }
  if (740 + x2 > 172 && 740 + x2 < 252 && 500 + y2 > 487) {
      
      score2 += 500;
    }
  
}

// Drawing actual game
function drawGame() {
  if (true) {
    cx.clearRect(0, 0, canvas.width, canvas.height);
    displayText();

    //Projectile one
    if (isFire1 && remChances1 >= 1) {
      if (time1 < timeOfFlight1) {
        drawProjectileOne();
      }
      if (time1 > timeOfFlight1 ) {
        resetProjectileOne();
        if (240 + x1 > 730 && 240 + x1 < 810 && 500 + y1 > 487)
          { 
        function des1(){
  document.getElementById("t2").src = "assests/ft1.png";
}

setTimeout(des1, 0000);
           
        function t1() {
  document.getElementById("t2").src = "assests/t1.png";
}

setTimeout(t1, 1000);
           }
      }
    }
    //Projectile 2
    if (isFire2 && remChances2 >= 1) {
      if (time2 < timeOfFlight2) {
        drawProjectileTwo();
      }
      if (time2 > timeOfFlight2 ) {
        resetProjectileTwo();
        if (740 + x2 > 172 && 740 + x2 < 252 && 500 + y2 > 487) {
            function des2() {
  document.getElementById("t1").src = "assests/ft2.png";
}

setTimeout(des2, 0000);
           
        function t2() {
  document.getElementById("t1").src = "assests/t2.png";
}

setTimeout(t2, 1000);
        }
      }
    }
    if (remChances1 ==0 && remChances2 ==0) {
      if (score1 > score2) {
        cx.font = "bold 34px Verdana";
        cx.fillStyle = "#FBC02D";
        cx.textAlign = "center";
        cx.fillText("PLAYER 1 WINS !!", canvas.width / 2, 150);

      } else if (score1 == score2) {
        cx.font = "bold 34px Verdana";
        cx.fillStyle = "#FBC02D";
        cx.textAlign = "center";
        cx.fillText("GAME TIED !!", canvas.width / 2, 150);
      } else {
        cx.font = "bold 34px Verdana";
        cx.fillStyle = "#FBC02D";
        cx.textAlign = "center";
        cx.fillText("PLAYER 2 WINS !!", canvas.width / 2, 150);

       
      }
    }
  }
  window.requestAnimationFrame(drawGame);
}
drawGame();