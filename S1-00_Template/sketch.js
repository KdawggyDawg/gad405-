//DAT405 / GAD405
//S1-00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
let size = 50;
let size1 = 25;

//Initialization function
var newColor = 3;

function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
  background(255, 120, 190);
  frameRate(4);

}
function draw() {

/*if (newColor === 0)  fill(50, 170, 150);
else if (newColor === 1) fill(18, 255, 21);
else if (newColor === 2) fill(18, 21, 250);
else fill(random(250), random(250), random(250));
*/
    for(let y = 0; y < 10; y++) {
      for(let x = 0; x < 10; x++){
//Rendering function
fill(80, 100, 100);
rect(size*x, size*y, size, size);
fill(random(255), random(255), random(255));
    rect(size*x+15, size*y+15, size1, size1);
    console.log("x: " + x + ", Y:" + y);
    }
  }

/*fill(255);
text("open the developer > Javascript Console", 10, 100);
text("to see the nested loop number values", 10, 130);
*/
}
