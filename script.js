// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSB, noStroke, color, fill,
   ellipse, text, line, stroke, width, mouseX, mouseY, height */

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, color3, color4;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  // Hue is between 0-360 and Saturation/Brightness are between 0-100
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  // color () is a function call
  // backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  // color1 = color(0, 80, 80);
  // color2 = color(200, 80, 80);
  
  morningMode ();
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.


  // The red and blue circles:
  fill(color1);
  ellipse(100, 100, 50);
  fill(color2);
  ellipse(300, 100, 50);
  fill(color3);
  ellipse(100, 300, 50);
  fill(color4);
  ellipse(300, 300, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
 // text("Flip the switch: "+ Math.floor(mouseX) + ", " + Math.floor(mouseY), 20, 20);
  
  // draw the line
  drawCenterLine ();
  drawHorizontalCenterLine ();
  
  // night mode and day mode
  if ((mouseX > width/2) && (mouseY > height/2)){
    nightMode ();
  }
  if  ((mouseX > width/2) && (mouseY < height/2)) {
    afternoonMode ();
  }
  
  if ((mouseX < width/2) && (mouseY < height/2)) {
    morningMode ();
  }
  
  if ((mouseX < width/2) && (mouseY > height/2)) 
    eveningMode ();
  }  


function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width/2, 0, width/2, 400);
  noStroke();
}

function drawHorizontalCenterLine (){
  stroke (textColor);
  line (0, height/2, 399, height/2);
  noStroke ();
}

function morningMode (){
  backgroundColor = color (60, 16, 98);
  color1 = color (0, 80, 80);
  color4 = color (200, 80, 80);
  color2 = color (60, 16, 80);
  color3 = color (17, 52, 80);
  fill (0);
  text("Morning: "+ Math.floor(mouseX) + ", " + Math.floor(mouseY), 20, 20);
}

function nightMode () {
  backgroundColor = color (10);
  color1 = color (0, 80, 40);
  color4 = color (200, 80, 40);
  color2 = color (60, 16, 40);
  color3 = color (17, 52, 40);
  text("Night: "+ Math.floor(mouseX) + ", " + Math.floor(mouseY), 20, 20);
}

function eveningMode () {
  backgroundColor = color (0, 47, 94);
  color1 = color (0, 80, 60);
  color4 = color (200, 80, 60);
  color2 = color (60, 16, 60);
  color3 = color (17, 52, 60);
  text("Evening: "+ Math.floor(mouseX) + ", " + Math.floor(mouseY), 20, 20);
}

function afternoonMode () {
  backgroundColor = color (219, 58, 93);
  color1 = color (0, 80, 100);
  color4 = color (200, 80,100);
  color2 = color (60, 16, 100);
  color3 = color (17, 52, 100);
  text("Afternoon: "+ Math.floor(mouseX) + ", " + Math.floor(mouseY), 20, 20);
}

