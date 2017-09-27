function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 13, 255);
}


function draw() {
  background(0, 13, 255, 20);
  stroke(255, 255, 255, 100);
  fill(255, 255, 255, 80);

  var r = map(mouseX, 0, width, 10, 200);
  var i = map(mouseY, 0, height, 2, 20);

  for (var a = 0; a < i; a++) {
    ellipse(random(width, 0), random(0, height), r, r);
  }

}
