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
var avatarBuild;
var backGroundImage;
var behindAttributes
var headTopRight;
var clickNextAdventure;
var screenGrab;
var rightMiddleFace;
var bottomRightFace;
var bottomMiddleFace;
var centerMiddleFace;
var headMiddle;
var informationBanner;
var nameBanner;
var headLeft;
var leftMiddle;
var leftBottom;
var fisrtTitleScreen;
var titleScreens;
var nameRace;
var ageWeight;
var clickNext;
var rightBottom;
var rightCenter;
var rightTop;
var screenCap;
var backGroundT;
var avatarTop;
var avatarMiddle;
var avatarBottom;
var secondTopRight;
var secondTopRightImg;
var dwarfEyes;
var dwarfEyesImg;
var dwarfMouth;
var dwarfMouthImg;
var input;
var input2;
var input3;
var input4;
var input5;
var backGroundHtml;
var instructions;
var clickadventureintropage;


function preload() {
  firstPage = loadImage('firstg1.png');
  secondPage = loadImage('game.JPG');
  woodbackgroundImg = loadImage("woodbackground.png");
  oldPaper = loadImage("oldpaper.jpeg");
  animatedBackdrop = loadImage("Animatedbackdrop.png");
  avatarBody = loadImage("avatarbody.png");
  avatarBody = loadImage("avatarbody.png");
  elfHair = loadImage("Assets/Elf Head.png")
  fullPractice = loadImage("fullpracticesketch.png")
  eyePractice = loadImage("Assets/Elf Eyes.png")
  bottomLeft = loadImage("Assets/Elf Mouth.png")
  centerBottom = loadImage("Assets/Ork Mouth.png")
  centerMiddle = loadImage("Assets/Ork Eyes.png")
  centerTop = loadImage("Assets/Ork Head.png")
  fisrtTitleScreen = loadImage("fantasyavatarbuildinggame.png")
  titleScreens = loadImage("endScreenGraphic.png")
  nameRace = loadImage("Assets/nameraceb.png")
  ageWeight = loadImage("Assets/ageweightheightbanner.png")
  clickNext = loadImage("Assets/clicknextbanners.png")
  rightBottom = loadImage("Assets/Humanmouth.png")
  rightCenter = loadImage("Assets/Humaneyes.png")
  rightTop = loadImage("Assets/humanhead.png")
  screenCap = loadImage("Assets/screengrabcam.png")
  backGroundT = loadImage("Assets/backgroundtrans.png")
  backGroundHtml = loadImage("Assets/backgroundhtml.png")
  instructions = loadImage("Assets/characterinstructionspage1.png")

  secondTopRightImg = loadImage("Assets/dwarfhead.png")
  dwarfEyesImg = loadImage("Assets/Dwarfeyes.png")
  dwarfMouthImg = loadImage("Assets/Dwarfmouth.png")
  //clickadventureintropage = loadImage("Assets/clickadventureintropage.png")


}

function setup() {
  cnv = createCanvas(1800, 1200);
  input = createInput("  name")
  input2 = createInput("race")
  input3 = createInput(" age")
  input4 = createInput(" weight")
  input5 = createInput(" height")
  avatarTop = backGroundT;
  avatarMiddle = backGroundT;
  avatarBottom = backGroundT;


  click1 = new Clickable();
  click1.locate(20, 20);
  click1.onHover = function() {
    this.color = "#4396D9 ";
    this.textColor = "#FFFFFF";
    this.text = "MOVE";
  };

  click1.onOutside = function() {
    this.color = "#EEEEEE";
    this.text = "Name Species";
    this.textColor = "#000000";
  };
  click1.onPress = function() {
    this.stroke = "#FF0000";
  };
  click1.onRelease = function() {
    this.x += 200;
  };
  screenGrab = new Clickable();
  screenGrab.image = screenCap;
  screenGrab.fitImage = true;
  screenGrab.imageScale = 1;
  screenGrab.text = "";
  screenGrab.locate(240, 980);
  screenGrab.resize(120, 72);
  screenGrab.onHover = function() {
    screenGrab.imageScale = 1.1;

  };
  screenGrab.onPress = function() {
    saveCanvas();
    state = "end";
  };

  screenGrab.onOutside = function() {
    screenGrab.imageScale = 1;
  };
  clickNextAdventure = new Clickable();
  //clickNextAdventure.image = clickNext;
  clickNextAdventure.imageScale = 1;
  clickNextAdventure.text = "";
  clickNextAdventure.locate(880, 12);
  clickNextAdventure.resize(20, 20);
  clickNextAdventure.onHover = function() {
    clickNextAdventure.imageScale = 1.1;
  };
  clickNextAdventure.onOutside = function() {
    clickNextAdventure.imageScale = 1;
  };

  //top Right Head
  headTopRight = new Clickable();
  headTopRight.image = rightTop;
  headTopRight.locate(1140, 200);
  headTopRight.resize(180, 140);
  headTopRight.text = "";
  headTopRight.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headTopRight.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  headTopRight.onPress = function() {
    avatarTop = rightTop;
  }

  //top dwarf head
  secondTopRight = new Clickable();
  secondTopRight.image = secondTopRightImg;
  secondTopRight.locate(1380, 200);
  secondTopRight.resize(180, 140);
  secondTopRight.text = "";
  secondTopRight.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  secondTopRight.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  secondTopRight.onPress = function() {
    avatarTop = secondTopRightImg;
  }
  // middle dwarf
  dwarfEyes = new Clickable();
  dwarfEyes.image = dwarfEyesImg;
  dwarfEyes.locate(1380, 380);
  dwarfEyes.resize(180, 140);
  dwarfEyes.text = "";
  dwarfEyes.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  dwarfEyes.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dwarfEyes.onPress = function() {
    avatarMiddle = dwarfEyesImg;
  }
  //dwarf Mouth
  //bottom right
  dwarfMouth = new Clickable();
  dwarfMouth.image = dwarfMouthImg;
  dwarfMouth.cornerRadius = 10;
  dwarfMouth.locate(1380, 550);
  dwarfMouth.resize(180, 140);
  dwarfMouth.text = "";
  dwarfMouth.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };

  dwarfMouth.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  dwarfMouth.onPress = function() {
    avatarBottom = dwarfMouthImg;
  }
  // middle right
  rightMiddleFace = new Clickable();
  rightMiddleFace.image = rightCenter;
  rightMiddleFace.locate(1140, 380);
  rightMiddleFace.resize(180, 140);
  rightMiddleFace.text = "";
  rightMiddleFace.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  rightMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  rightMiddleFace.onPress = function() {
    avatarMiddle = rightCenter;
  }
  //bottom right
  bottomRightFace = new Clickable();
  bottomRightFace.image = rightBottom;
  bottomRightFace.cornerRadius = 10;
  bottomRightFace.locate(1140, 550);
  bottomRightFace.resize(180, 140);
  bottomRightFace.text = "";
  bottomRightFace.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };

  bottomRightFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bottomRightFace.onPress = function() {
    avatarBottom = rightBottom;
  }
  //bottom middle
  bottomMiddleFace = new Clickable();
  bottomMiddleFace.image = centerBottom;
  bottomMiddleFace.locate(890, 550);
  bottomMiddleFace.resize(180, 140);
  bottomMiddleFace.text = "";
  bottomMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bottomMiddleFace.onPress = function() {
    avatarBottom = centerBottom;
  }
  //middle center
  centerMiddleFace = new Clickable();
  centerMiddleFace.image = centerMiddle;
  centerMiddleFace.locate(888, 380);
  centerMiddleFace.resize(180, 140);
  centerMiddleFace.text = "";
  centerMiddleFace.onHover = function() {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  centerMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  centerMiddleFace.onPress = function() {
    avatarMiddle = centerMiddle;
  }


  headMiddle = new Clickable();
  headMiddle.image = centerTop;

  headMiddle.locate(888, 200);
  headMiddle.resize(180, 140);
  headMiddle.text = "";
  headMiddle.onHover = function() {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headMiddle.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  headMiddle.onPress = function() {
    avatarTop = centerTop;
  }

  //Head left
  headLeft = new Clickable();
  //headLeft.cornerRadius = 10;
  headLeft.image = elfHair;
  headLeft.locate(640, 200);
  headLeft.resize(180, 140);
  headLeft.text = "";
  headLeft.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headLeft.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  headLeft.onPress = function() {
    avatarTop = elfHair;
  }
  //left middle
  leftMiddle = new Clickable();
  //headLeft.cornerRadius = 10;
  leftMiddle.image = eyePractice;
  leftMiddle.locate(640, 380);
  leftMiddle.resize(180, 140);
  leftMiddle.text = "";
  leftMiddle.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftMiddle.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  leftMiddle.onPress = function() {
    avatarMiddle = eyePractice;
  }
  //left middle
  leftBottom = new Clickable();
  //headLeft.cornerRadius = 10;
  leftBottom.image = bottomLeft;
  leftBottom.locate(640, 550);
  leftBottom.resize(180, 140);
  leftBottom.text = "";
  leftMiddle.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftBottom.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  leftBottom.onPress = function() {
    avatarBottom = bottomLeft
  };
  //left middle
  leftBottom = new Clickable();
  //headLeft.cornerRadius = 10;
  leftBottom.image = bottomLeft;
  leftBottom.locate(640, 550);
  leftBottom.resize(180, 140);
  leftBottom.text = "";
  leftMiddle.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftBottom.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  leftBottom.onPress = function() {
    avatarBottom = bottomLeft
  };
}


function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'instructions':
      instructions();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level 1':
      gameScreen();
      //CHANGE AREA FOR INFO
      text(input.value(), 160, 85);
      text(input2.value(), 460, 85);
      text(input3.value(), 700, 82);
      text(input4.value(), 940, 82);
      text(input5.value(), 1240, 82);

      break;

    case 'end':
      end();
      cnv.mouseClicked(endMouseClicked);
      break;
    default:
      break;
  }


}

function title() {
  textSize(40);
  stroke(255);
  background(2);

  //text('CLICK YOUR ADVENTURE AVATAR BUILDING GAME', 400, 100);
  textSize(30);
  image(fisrtTitleScreen, 100, 180, 1600, 800);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'

}

function instructions() {
  textSize(40);
  stroke(255);
  background(2);


  textSize(30);
  image(fisrtTitleScreen, 80, 100, 1240, 400);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'

}

function level1() {
  secondPage.image = secondPage;
  background(50, 1000, 1000);
  textSize(30);
  //text('GAME', 100, 100);
  avatarBuild()
  image(cursorImg, mouseX, mouseY);

}

function level1MouseClicked() {
  console.log('canvas is clicked on level 1');
  state = 'title'
}

function end() {
  background(2);

  image(titleScreens, 80, 100, 1240, 600);
  textSize(60);
  text('REFRESH TO DESIGN AGAIN', 320, 770);
  stroke(0, 64, 255);
  textColor(0, 64, 255)
};


function endMouseClicked() {
  state = "title";
  console.log('canvas is clicked on end');
}




function changeBG() {
  background(255);
  //createColorPicker()
}


function gameScreen() {
  background(217, 176, 67);
  //backGroundImage.draw();
  image(woodbackgroundImg, 8, 10, 1780, 1180);
  image(ageWeight, 598, 22, 780, 100);
  image(oldPaper, 600, 158, 1000, 800);
  image(nameRace, 60, 20, 500, 100);
  image(oldPaper, 80, 280, 420, 580);
  //avatarparts
  image(avatarTop, 80, 280, 425, 425);
  image(avatarMiddle, 80, 300, 425, 425);
  image(avatarBottom, 80, 320, 425, 425);


  headTopRight.draw();
  leftBottom.draw();
  clickNextAdventure.draw();
  screenGrab.draw();
  rightMiddleFace.draw();
  leftMiddle.draw();
  bottomRightFace.draw();
  bottomMiddleFace.draw();
  headLeft.draw();
  centerMiddleFace.draw();
  headMiddle.draw();
  secondTopRight.draw();
  dwarfEyes.draw();
  dwarfMouth.draw();



  //ADDNEW  CHARACTER
  //image(backGroundT,200, 200,180,180)

}
