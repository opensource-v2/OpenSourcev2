let font;

function preload() {
  font = loadFont('font/authentic-sans-150.otf');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  textFont(font);
  textSize(160);
  fill('#191A18');
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#4E937A');
  rotateY(frameCount / 60);
  text('{v2}', 0, 0);

}