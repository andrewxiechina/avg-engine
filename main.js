// Test data
var data = {
  preload:{
    image:{
      "bg1": "bg-home-1.jpg",
      "bg2": "bg-gargen-1.jpg",
      "mei": "mei.png",
      "ling": "ling.png",
      "text-frame": "text-frame.png"
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

function createHotKey(){
  key1 = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    key1.onDown.add(next, this);
}

function next(){
  console.log("NEXT");
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
}

var enterIsDown = false;
function update() {


}


// Phaser Entry Point
var game = new Phaser.Game(1280,960,Phaser.Auto,'',{
  preload: preload,
  create: create,
  update: update
});

