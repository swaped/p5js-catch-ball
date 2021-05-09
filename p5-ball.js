var bx = 300;
var by = 300;
var size = 40;
var score = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
}

function draw() {
  background(220);
  
  levelOne();
  text(("score: " + score), width/2, 10);
}//end of draw

function levelOne() {
  text("level 1", width/2, height-20);
  
  var distanceToBall = dist(bx,  by, mouseX, mouseY);
  
  if(distanceToBall < size/2) {
    bx = random(width);
    by = random(height);
    score = score + 1;
  }
  
  
  line(bx, by, mouseX, mouseY);
  
  ellipse(bx, by, size);
  
} //end of levl1
