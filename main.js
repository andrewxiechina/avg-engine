// Test data
var data = {
  preload:{
    image:{
      "bg1": "bg-home-1.jpg",
      "bg2": "bg-gargen-1.jpg",
      "mei": "mei.png",
      "ling": "ling.png",
      "text-frame": "text-frame.png",
      "button": "black.png"
    },
    audio: {
      "music": "music1.mp3"
    }
  },
  create: {

  },
  update: [
    {
      text:{
        name: "Mei",
        audio: "",
        text: "Who are you? Where are you from?"
      }
    },
    {
      text:{
        name: "Mei",
        audio: "",
        text: "What are you doing here in my room?"
      }
    },
    {
      text:{
        name: "Mei",
        audio: "",
        text: "Are you going to do me harm?"
      }
    },
    {
      options: {
        "option1": {
          text: "I will not tell you who I am."
        },
        "option2":{
          text: "I forgot my name."
        }
      }
    }
  ]
}
function createBackground(key) {
  var bg = game.add.sprite(0,0,key);
  bg.alpha = 0;
  var animation = game.add.tween(bg);
  animation.to({ alpha: 1}, 1000, null);   
  animation.start(); 
  return bg;
}
function createTextFrame(key) {
  var bg = game.add.sprite(1280,960,key);
  bg.anchor.setTo(1,1);
  bg.alpha = 0;
  var animation = game.add.tween(bg);
  animation.to({ alpha: 1}, 1000, null);   
  animation.start(); 
  return bg;
}
function createFigure(key) {
  var figure = game.add.sprite(1280,640,key);
  figure.anchor.setTo(1,1);
  figure.alpha = 0;
  var animation = game.add.tween(figure);
  animation.to({ alpha: 1}, 600, null);   
  setTimeout(function(){
    animation.start();
  }, 1000);
   
  return figure; 
}
function createBackgroundMusic(key){
  var music = game.add.audio(key);
  music.onDecoded.add(function(){
    music.fadeIn(5000);
  }, this);
}
function createAudio(key){
  var audio = game.add.audio(key);
  audio.onDecoded.add(function(){
    audio.play();
  },this);
}
function createText(text){
  var style = { font: "32px Courier", fill: "#000000", fontWeight: "bold" };
  var text = game.add.text(45, 960-320+45, text, style);
  return text;
}
function createButton(y,name,content) {
  var x = 140;
  var button = game.add.button(140, y, 'button', click, this, 0, 1, 2);
  button.alpha = 0.7;
  button.scale.set(1.6,1);
  button.name = name;
  var style = { font: "30px Courier", fill: "#FFFFFF"};
  var text = game.add.text(0,0, content, style);
  text.x = x + button.width/2 - text.width/2;
  text.y = y + button.height/2 - text.height/2 + 10;
}
function createButtons(options){
  var i = 0;
  for(var key in options){
    // To change to a system of events?? / passing callbacks??
    i += 1;
    createButton(i*100,i,options[key].text);   
  }
}
function click(button) {
	console.log(button.name);
}
function createHotKey(){
  key1 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    key1.onDown.add(next, this);
}
function next(){
  currentPage += 1;
  var myText = data.update[currentPage].text;
  if(myText){
    console.log(myText);
    nextText(myText.text);
  }
  var options = data.update[currentPage].options;
  if(options){
    createButtons(options);
  }
}
function nextText(newText) {
  text.text = newText
}


// Main Functions
function preload() {
  var img = data.preload.image;
  for(var key in img){
    game.load.image(key, img[key]);
  }
  var audio = data.preload.audio;
  for(var key in audio){
    game.load.audio(key, audio[key]);
  }
}

function create() {
  createHotKey();
  createBackground('bg1');
  createTextFrame('text-frame')
  createFigure('mei');
  createAudio('music');
  text = createText(data.update[0].text.text);
}

function update() {
  
}


// Phaser Entry Point
var game = new Phaser.Game(1280,960,Phaser.Auto,'',{
  preload: preload,
  create: create,
  update: update
});

// States
var currentPage = 0;
var gotoPage = 0;

//Sprites
var text;

