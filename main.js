


// Test data
var data = {
  preload:{
    "bg1": "bg-home-1.jpg",
    "bg2": "bg-gargen-1.jpg",
    "mei": "mei.png",
    "ling": "ling.png"
  }
}
function createBackground(key) {
  var bg = game.add.sprite(0,0,key);
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

// Main Functions
function preload() {
  var urls = data.preload;
  for(var key in urls){
    game.load.image(key, urls[key]);
  }
}

function create() {
  createBackground('bg1');
  createFigure('mei');
}

function update() {
}


// Phaser Entry Point
var game = new Phaser.Game(1280,960,Phaser.Auto,'',{
  preload: preload,
  create: create,
  update: update
});

