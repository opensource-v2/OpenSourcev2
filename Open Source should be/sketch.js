let font;
let fontbold;
let responses = ["Intentionally Equitable", "Truly Collaborative", "Feminist", "Authentically Diverse", "welcoming, not intimidating", "Access that drives Inclusion", "safe", "Intersectional", "non toxic", "not biased",  "transparent", "fair", "not time based", "reviewed", "more than software", "non exploitative", "technology-neutral" ,"protecting user data", "forward thinking" ,"sharing knowledge"]; 

function preload() {
  font = loadFont('font/authentic-sans-130.otf');
  fontbold = loadFont('font/authentic-sans-150.otf');
}

let frameCounter = 0;
let currentTermIndex = 0;

function setup() {
  createCanvas(550, 500);
  frameRate(30); // FPS 30
  textAlign(CENTER, CENTER); 
}

function draw() {
  background('#4E937A');
  fill('#191A18');

  
  textSize(30);
  textFont(fontbold);
  text("{v2}", width / 2, 195);


  textSize(20);
  textFont(font);

  // Change the random term every 60 frames (2 seconds at 30 FPS)
  if (frameCounter % 60 === 0) {
    currentTermIndex = Math.floor(random(responses.length));
  }

  text(
    'Open Source should be ' + responses[currentTermIndex] + ".", 
    width / 2, 
    height / 2
  );

  frameCounter++;
}


