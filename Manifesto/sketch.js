/*
Inspired and built upon by Winnie Soon's remake of 'A House of Dust by Alison Knowles and James Tenney' (1968) - https://editor.p5js.org/siusoon/sketches/sEjio7jTj

- function: MousePress to generate and add a new poem
*/

let font;
let line1 = [], line2 = [], line3 = [], line4 = [];
let poem_no = 5;
let moveY = 10;

let 
theme = ['NON TOXIC', 'DIVERSE', 'INTERSECTIONAL', 'FEMINIST', 'EQUITABLE', 'SUPPORTIVE', 'INCLUSIVE', 'ANTI-OPPRESSIVE', 'TECHNOLOGY NEUTRAL', 'ACCOUNTABLE', 'PROGRESSIVE', 'COLLABORATIVE', 'A SAFE SPACE', 'TRANSPARENT', 'RADICAL', 'RESPECTFUL', 'UNBIASED', 'STRONGER', 'NON EXCLUSIVE', 'AN EVEN FIELD', 'EQUAL', 'ACCEPTING', 'WELCOMING', 'COLLABORATIVE', 'NOT INTIMIDATING', 'REVIEWED'],
    
how = ['EMBRACING DIFFERENT BACKGROUNDS AND PERSPECTIVES', 'RECOGNIZING MULTIPLE LAYERS OF IDENTITY AND OPPRESSION', 'ADVOCATING FOR GENDER EQUALITY AND WOMENS RIGHTS', 'CHALLENGING SYSTEMIC INJUSTICES AND DISCRIMINATION','EMBRACING ALL TECHNOLOGIES WITHOUT BIAS', 'HONORING OTHERS RIGHTS, BELIEFS, AND FEELINGS', 'REJECTING DISCRIMINATION', 'PROVIDING FAIR OPPORTUNITIES AND RESOURCES TO ALL', 'AMPLIFYING MARGINALIZED VOICES', 'PROVIDING OPPORTUNITIES'],
    
becoming = ['FORWARD THINKING', 'RESILIENT', 'LOOKING TO THE FUTURE', 'AN ALTERNATIVE TO OLD OPEN SOURCE THINKING', 'CHANGING', 'IMPROVING OPEN SOURCE', 'ENSURING QUALITY AND FAIRNESS', 'BREAKING BARRIERS', 'BUILDING A SUSTAINABLE FUTURE', 'CHALLENGING THE STATUS QUO', 'REIMAGINING POSSIBILITY', 'REDEFINING CONVENTIONAL THINKING', 'DEVELOPING A MORE INCLUSIVE SYSTEM', 'ADVANCING WITH PURPOSE', 'EVOLVING'];

function preload() {
  font = loadFont('font/authentic-sans-130.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //generate poems
  poems();
  frameRate(10);
}


function draw() {
  background('#191A18'); 
  fill('#4E937A');
  textFont(font);
  display();
  
 
  //auto generate the poem
  if (frameCount % 50 ==0) {
    mousePressed();
  }

}

function poems() {
  //generate the poem line by line and for how many pieces
  for(let i = 0; i<poem_no ; i++) {
    let line1_t = "OPEN SOURCE V2";
    line1.push(line1_t);
    
    let line2_t = "THAT IS " + random(theme);
    line2.push(line2_t);
    
    let line3_t = "BY " + random(how);
    line3.push(line3_t);
    
    let line4_t = "THEREFORE " + random(becoming);
    line4.push(line4_t);
  }
}

function display(){
  //to make the poems move upwards, move the entire canvas up (translate function) continously
  translate(0, moveY) ;
  moveY-=.8;  
  let spaceX = 10;
  let spaceY = 15;
  
  
  //specify each line's position
  for(let i = 0; i <line1.length; i++) {
    text(line1[i], spaceX,spaceY); 
    text(line2[i], spaceX+10, spaceY+15);
    text(line3[i], spaceX+20, spaceY+30);
    text(line4[i], spaceX+30, spaceY+45);
    spaceY=spaceY+70
  }
}

function mousePressed() {
  poems();
}
