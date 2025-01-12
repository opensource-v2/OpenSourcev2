let rotationAngle = 0;  // Global variable for rotations
let font;
let fontbold;

function preload() {
  font = loadFont('font/authentic-sans-130.otf');    // Regular font
  fontbold = loadFont('font/authentic-sans-150.otf'); // Bold font
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#191A18');
  translate(width / 2, height / 2);
    textFont(font);

  // Circular positions for phrases
  let phrases = [" Intersectional", "Equitable", "Feminist", "Feasible"];
  let arrowRadius = 150;   // Radius for the arrows
  let textRadius = 150;    // Radius for the text
  let angleOffset = 90;    // Start at the top of the circle

  // Updates rotation angle to make the arrows rotate clockwise
  rotationAngle += 1;  // rotation speed

  // Draws arrows first, so they appear behind the text
  for (let i = 0; i < phrases.length; i++) {
    // Calculates the fixed angle for each phrase (for text only)
    let fixedAngle = i * 360 / phrases.length - angleOffset;
    
    // Calculates the rotated angle for the arrows around the circle
    let angle = fixedAngle + rotationAngle;
    let arrowX1 = arrowRadius * cos(angle);
    let arrowY1 = arrowRadius * sin(angle);

    // Calculate a slightly advanced angle for the arrowhead to create a curved path
    let arrowX2 = arrowRadius * cos(angle + 10);  // Adjust for length of arrow
    let arrowY2 = arrowRadius * sin(angle + 10);

    // Draws the arrow pointing along the circular path
    drawArrow(arrowX1, arrowY1, arrowX2, arrowY2);
  }

  // Draws the text and the black box behind it- hiding the arrows to make the text more visible
  for (let i = 0; i < phrases.length; i++) {
    // Calculates the fixed angle for each phrase (for text only)
    let fixedAngle = i * 360 / phrases.length - angleOffset;
    
    // Calculates positions for text
    let textX = textRadius * cos(fixedAngle);
    let textY = textRadius * sin(fixedAngle);

    // Calculates the width and height of the text
    let textWidthValue = textWidth(phrases[i]);
    let textHeight = textAscent() + textDescent();  // Text height

    // This draws black box behind the text to prevent arrows from overlapping
    fill('#191A18');  // Black fill for the box
    noStroke();
    rectMode(CENTER);
    rect(textX, textY, textWidthValue + 20, textHeight + 10);  // Adds padding to the box


    textSize(16);
    fill('#4E937A');
    text(phrases[i], textX, textY);
  }

  // "OPEN SOURCE V2"
  textSize(18);
  textFont(fontbold);
  fill('#4E937A');
  text("Open Source V2", 0, 0);
}

function drawArrow(x1, y1, x2, y2) {
  // Draws line for arrow with green color
  stroke('#4E937A');
  line(x1, y1, x2, y2);

  // Arrowhead with green color
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowSize = 7;
  fill('#4E937A');
  push();
  translate(x2, y2);
  rotate(angle);
  triangle(0, 0, -arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2);
  pop();
}
