//DAT405 / GAD405
 //00_Template
 //The purpose of this sketch is to provide a basic template
 //for P5.js projects
 var x, y;
 var xBall = Math.floor(Math.random() * 300) + 50;
 var yBall = 50;
 var diameter = 50;
 var xBallChange = 5;
 var yBallChange = 5;
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
//xB effects the movement of circle, x/yPad effects the rectangle the circle
//off of

 function setup() {
   createCanvas(900,900);
   background(200, 160, 190);
   frameRate(11);

 }

 function draw() {
   background(0);
   xBall += xBallChange;
   yBall += yBallChange;

   if (xBall < diameter/2 ||
         xBall > width - 0.5*diameter) {
     xBallChange *= -1;
   }
   if (yBall < diameter/2 ||
        yBall > height - diameter) {
     yBallChange *= -1;
   }
   if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
  xBallChange *= -1;
  yBallChange *= -1;
}
  //var s = random(200);
   size = random(200);
   //
   for(var x = 0; x < 10; x++){
   customShape();
}
if (!started) {
  xPaddle = windowWidth / 2;
  yPaddle = windowHeight - 100;
  started = true;
}
//tells the rectangle to allow movement once game starts
fill(0, 255, 255);
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

   fill(255, 0, 255);
   noStroke();
   ellipse(xBall, yBall, diameter, diameter);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
  //enables button presses
}
   /*"var s", indicates random size of backgr shapes
     */
   function customShape(){
     x = random(700)
     y = random(700)
       fill(random(255), 40, random(255), random(255));
       rect(x, y, size, size);
       stroke(10, 200, 220);
       rect (x, y, size - 40, size - 40);
       stroke(100, 100, 150);
       fill(200, 255, 255);
       rect (x, y, size - 80, size - 80);
     }

 /*str cretaes lines around the circles

 }
 //}

 /*fill(255);
 text("open the developer > Javascript Console", 10, 100);
 text("to see the nested loop number values", 10, 130);
 */
