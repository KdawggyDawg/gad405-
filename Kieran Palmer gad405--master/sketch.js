//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var x, y;

function setup() {
  createCanvas(500,500);
  background(200, 160, 190);
  frameRate(10);

}

function draw() {
  //var s = random(200);
  size = random(200);
  customShape();
}

/*"var s", indicates random size of circles, s in the circle line references
this so that it knows what size to change to!
    */
  function customShape(){
    x = random(500)
    y = random(500)
      fill(random(255), 40, random(255), random(255));
      rect(x, y, size, size);
      stroke(10, 200, 220);
      rect (x, y, size - 40, size - 40);
      stroke(100, 100, 150);
      fill(200, 255, 255);
      rect (x, y, size - 80, size - 80);
    }

/*str cretaes lines around the circles, line 31 effects the fill of the
innermost circle

}
//}

/*fill(255);
text("open the developer > Javascript Console", 10, 100);
text("to see the nested loop number values", 10, 130);
*/
