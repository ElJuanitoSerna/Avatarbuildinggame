'use strict'


let roll = ['You'];

let action = ['grab a', 'throw a', 'jump over a', 'run into a', 'pick up a', 'conjure a', 'walk away from a', 'duck a', 'use a', 'swing a'];

let weapon = ['axe', 'potion bottle', 'long sword', 'warhammer', 'drink of elixir', 'crossbow', 'morning star', ' short sword', 'gaunlet', 'helmet'];

let actiont = [',  and throw it at', ', and run into', ', and hide from', ', attack', ', cast a spell at', ',and vanquish ', ',it misses ', ', it is blocked by']


let creature = ['a troll', 'a gargoyle', 'a serpant', 'a witch', 'a dark elf', 'a sorcerer', 'a fairy', 'a cave gnome', 'a barbarian', 'a fighter', 'a paladin', 'a ranger'];

let state = 'title';
let cnv;
let dr;
let ac;
let wp;
let aet;
let cr;
let myFont;
let wrds;
let button;
let addMoreButton;
let centerPicture;
let cnv2;
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
//var clickNext;
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
var instructionsImg;
var clickNextPage;
var clickNextPageImg;
var clickAdventureIntroPage;
var clickAdventureIntroPageImg;
var closingPage;
var closingPageImg;
var avatarEnd;
//var giftLoadImage;
//var gif_loadImg, gif_createImg;

//var clickNextPageMouseClicked;


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
  //clickNext = loadImage("Assets/clicknextbanners.png")
  rightBottom = loadImage("Assets/Humanmouth.png")
  rightCenter = loadImage("Assets/Humaneyes.png")
  rightTop = loadImage("Assets/humanhead.png")
  screenCap = loadImage("Assets/screengrabcam.png")
  backGroundT = loadImage("Assets/backgroundtrans.png")
  backGroundHtml = loadImage("Assets/backgroundhtml.png")
  instructionsImg = loadImage("Assets/1instructionspage.png")
  //myFont = loadFont('Assets/Yatra_One/YatraOne-Regular.ttf');
  secondTopRightImg = loadImage("Assets/dwarfhead.png")
  dwarfEyesImg = loadImage("Assets/Dwarfeyes.png")
  dwarfMouthImg = loadImage("Assets/Dwarfmouth.png")
  closingPageImg = loadImage("Assets/closinggame.png")
  clickNextPageImg = loadImage("Assets/clickadventureintro.png")
  clickAdventureIntroPageImg = ("Assets/clickadventureintropage.png")
  //giftLoadImage = loadImage("Assets/Intropage.gif");
  //gif_createImg = createImg("Assets/Intropage.gif");
};

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


  //click next adventure game
  //fill('255');
  //textFont(myFont);
  //textSize(25);
  //cnv2 = createCanvas(1000, 1000);
  //cnv.parent("#canvasDiv");

  //background(66, 40, 14);
  //frameRate(60);
  //intText();
  //button = createButton("Click to start your next Adventure")
  //button = select('#randButton')
  //button.mousePressed(buttonPressed);
  //button.class("randomizerButton");
  //addMoreButton.mousePresses(buttonPressed);
  //
  //for(let i =0; i <3; i++){
  //nameInputs.push(createInput());
  //nameInputs[nameInputs. length - 1}.parent("#inputFields")
  //}




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
    state = "avatarEnd";
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
  headTopRight.locate(1200, 180);
  headTopRight.resize(250, 250);
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
  secondTopRight.locate(1460, 180);
  secondTopRight.resize(250, 250);
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
  dwarfEyes.locate(1460, 440);
  dwarfEyes.resize(250, 250);
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
  dwarfMouth.locate(1460, 700);
  dwarfMouth.resize(250, 250);
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
  rightMiddleFace.locate(1200, 440);
  rightMiddleFace.resize(250, 250);
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
  bottomRightFace.locate(1200, 700);
  bottomRightFace.resize(250, 250);
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
  bottomMiddleFace = new Clickable();
  bottomMiddleFace.image = centerBottom;
  bottomMiddleFace.locate(940, 700);
  bottomMiddleFace.resize(250, 250);
  bottomMiddleFace.text = "";
  bottomMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bottomMiddleFace.onPress = function() {
    avatarBottom = centerBottom;
  }
  centerMiddleFace = new Clickable();
  centerMiddleFace.image = centerMiddle;
  centerMiddleFace.locate(940, 440);
  centerMiddleFace.resize(250, 250);
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

  headMiddle.locate(940, 180);
  headMiddle.resize(250, 250);
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
  headLeft.locate(675, 180);
  headLeft.resize(250, 250);
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
  leftMiddle.locate(675, 440);
  leftMiddle.resize(250, 250);
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
  leftBottom.locate(675, 440);
  leftBottom.resize(250, 250);
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
  leftBottom.locate(675, 700);
  leftBottom.resize(250, 250);
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
    case 'introPage':
      cnv.mouseClicked(introPageMouseClicked);
      break;


    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'instructions':
      instructions();
      cnv.mouseClicked(instructionsMouseClicked);
      break;

    case 'gameScreen':
      gameScreen();
      //CHANGE AREA FOR INFO
      text(input.value(), 160, 85);
      text(input2.value(), 460, 85);
      text(input3.value(), 740, 82);
      text(input4.value(), 1100, 82);
      text(input5.value(), 1400, 82);
      break;

    case 'avatarEnd':
      avatarEnd();
      cnv.mouseClicked(avatarEndMouseClicked);
      break;

    case 'clickNextPage':
      clickNextPage();
      cnv.mouseClicked(clickNextPageMouseClicked);
      break;

    case 'nextPage':
      nextPage();
      cnv.mouseClicked(nextPageMouseClicked);
      break;

    case 'clickAdventureIntroPage':
      clickAdventureIntroPage();
      cnv.mouseClicked(clickAdventureIntroPageMouseClicked);
      break;
      //case 'clickgame':
      //clickgame();
      //cnv.mouseClicked(endMouseClicked);
      //break;

    case 'closingPage':
      closingPage();
      cnv.mouseClicked(closingPageMouseClicked);
      break;
    default:
      break;
  };


}

function introPage() {
  image(gifLoadImage, 0, 0)
  //gif_createImg.position(800, 800);
  //image(gif_loadImg, 50, 50);

}

function introPageMouseClicked() {
  console.log('canvas is clicked on intro page')
  state = 'title'
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
  state = 'instructions'

}

function instructions() {
  image(instructionsImg, 60, 100, 1680, 1000);
}

function instructionsMouseClicked() {
  console.log('canvas is clicked on instructions');
  state = 'gameScreen'
}

function gameScreen() {
  secondPage.image = secondPage;
  background(50, 1000, 1000);
  textSize(30);
  //text('GAME', 100, 100);
  avatarBuild()
  //image(cursorImg, mouseX, mouseY);
}

function gameScreenMouseClicked() {
  console.log('canvas is clicked on level 1');
  state = 'avatarEnd'
}

function avatarEnd() {
  background(2);
  image(clickNextPageImg, 60, 100, 1680, 1000);
  //textSize(20);
  //text('REFRESH TO DESIGN A NEW CHARACTER, ClICK SCREEN FOR NEXT ADVENTURE', 320, 770);
  //stroke(0, 64, 255);
  //textColor(255, 255, 255)
};

function avatarEndMouseClicked() {
  //next state
  console.log('canvas is clicked on avatarEnd');
  state = "clickNextPage";

}

function clickNextPage() {
  image(clickAdventureIntroPageImg, 80, 100, 1240, 600);
};

function clickNextPage() {
  console.log('canvas is clicked on clickNext Page')
  state = clickAdventureIntroPage
}

function clickAdventureIntroPage() {
  image(clickAdventureIntroPageImg, 80, 100, 1240, 600)
};




function gameScreen() {
  background(217, 176, 67);
  //backGroundImage.draw();
  image(woodbackgroundImg, 8, 10, 1780, 1180);
  image(ageWeight, 598, 22, 1000, 100);
  image(nameRace, 60, 20, 500, 100);
  image(oldPaper, 600, 158, 1170, 820);

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

  function clickYourNextAdventureGame() {

  }

  //ADDNEW  CHARACTER
  //image(backGroundT,200, 200,180,180)

}
