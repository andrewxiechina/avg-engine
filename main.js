// Code goes here
var game = new Phaser.Game(800,600,Phaser.Auto,'',{
  preload: preload,
  create: create,
  update: update
});

// Globals
var p1, p2, ball;

var ballLaunched = false;
var ballVelocity = 400;

function preload() {
  game.load.image('mei', 'http://res.cloudinary.com/andyxie/image/upload/v1488490994/person1_n1jlzn.png');
  game.load.image('ball', 'ball.png');
}

function create() {
  createFigure();
}

function update() {
}

function createFigure() {
  var figure = game.add.sprite(0,0,'mei');
  figure.alpha = 0;
  var figureEnters = game.add.tween(figure);
  figureEnters.to({ alpha: 1}, 600, null);   
  figureEnters.start(); 
    // pigArrives.to({x:150}, 1000, Phaser.Easing.Bounce.Out);
    // pigArrives.onComplete.add(firstTween, this);
    // pigArrives.start();

  return figure;
  
}


