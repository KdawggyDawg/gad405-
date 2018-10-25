//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(6);

  //Preferences for the text (size, and alignment)
  textSize(25);
  textAlign(CENTER);


  rect(width/2, height/2, 50, 50);
}

//Rendering functions
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(80, 80, 80);

  stroke(255, 0, 0)
line(360,360,30,360)
stroke(0, 255, 0)
line (30, 360, 360, 30)
stroke(0, 0, 255)
line(30, 30, 360, 360)
stroke(300, 300, 50)
line(30,360,30,30)
stroke(255, 0, 255)
line(30, 30, 360, 30);
stroke(0,150,150)
line(360,30,360,360,)
stroke(300,100,100,100)
noStroke();
fill(300, 0, 0);
 ellipse(360, 360, 70, 70);
 fill(0, 300, 50);
 ellipse(30, 360, 70, 70);
 fill(20, 20, 300);
 ellipse(360, 30, 70, 70);
  fill(300, 300, 50);
 ellipse(30, 30, 70, 70);




  //Set the color of the text
  fill(150,150,150);
  //Set the text message as the frame count
  //Position text in the middle of the screen
stroke(300,0,0,100);
strokeWeight(10);
  text("Frame Count:  " + frameCount, width/2, height/2-20);
  //Set the text message as the frame rate (round it to an integer)
  //Position text in the middle of the screen
  text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+20);

  //noLoop();
}
