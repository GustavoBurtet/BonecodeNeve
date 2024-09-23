function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(14, 235, 200);
  noStroke();
  fill("white")
  ellipse (200,300,150,150);
  ellipse (200,200,100,100);
  ellipse(200,120,80,80)

  fill("black")
  ellipse(200,180,10,10);
  ellipse(200,200,10,10);
  ellipse(200,220,10,10);
  
  fill("black")
  ellipse(188,110,10,10);
  ellipse(213,110,10,10);
  
  fill("orange")
  triangle(200,130,144,133,200,119);
  
  noFill();
  stroke("black")
  strokeWeight(10);
  line(188,140,213,140);
  
  stroke("brown")
  line(249,196,318,170)
  line(152,196,65,168)
  line(318,152,280,185)
  line(318,189,280,185)
  line(67,190,104,180)
  line(67,148,104,180)
}
  
  

  
