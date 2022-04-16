'use strict'



let state = 'title';
let cnv;
let firstPage;
let secondPage;
var canvas;
var click1;
var click2;
var click3;
var clickImg;
var woodbackgroundImg;
var oldPaper;
var animatedBackdrop;
var avatarBody;
var elfHair;
var fullPractice;
var eyePractice;
var bottomLeft;
var centerMiddle;
var centerBottom;
var centerTop;


function preload(){
  firstPage = loadImage ('firstg1.png');
  secondPage = loadImage ('game.JPG');
  clickImg = loadImage("Mustache practice.png");
woodbackgroundImg = loadImage("woodbackground.png");
oldPaper = loadImage("oldpaper.jpeg");
animatedBackdrop = loadImage("Animatedbackdrop.png");
avatarBody = loadImage ("avatarbody.png");
  avatarBody = loadImage ("avatarbody.png");
  elfHair= loadImage ("hair practice.png")
  fullPractice = loadImage("fullpracticesketch.png")
  eyePractice = loadImage("eyepractice.png")
  bottomLeft = loadImage ("chinpractice.png")
  centerBottom = loadImage("orkMouth.png")
  centerMiddle = loadImage("orkEyes.png")
  centerTop = loadImage ("orkTopPony.png")

}

function setup() {
  cnv = createCanvas(2000, 2400);
  image (firstPage,0,0);
  //image (secondPage,0,0);
  //cnv.mouseClicked(canvasClicked);

}



function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'end':
      end();
      cnv.mouseClicked(endMouseClicked);
      break;
    default:
      break;
  }

  //if (state === 'title') {
  //title();
  //cnv.mouseClicked( titleMouseClicked);
  //} else if (state === 'level 1'){
  //level1();
  //cnv.mouseClicked(level1MouseClicked);
  //}
}

function title() {
  //background(100);
  firstPage. image = firstPage, 0, 0;
  textSize(40);
  stroke(255);
  text('AVATAR BUILDING GAME', 100, 100);
  textSize(30);
  text('click anywhere to start', 100, 300)
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}


function level1() {
  secondPage. image = secondPage;
  background(50, 150, 200);
  textSize(30);
  text('GAME', 100, 100);







}

function level1MouseClicked() {
  console.log('canvas is clicked on level 1');
  state = 'end'
}

function end() {
  background(252, 186, 3);
  textSize(40);
  stroke(255);
  text('END', 100, 100);
}

function endMouseClicked() {
  console.log('canvas is clicked on end');
}
