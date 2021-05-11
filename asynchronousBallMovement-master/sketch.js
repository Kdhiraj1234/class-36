var canvas,backgroundImg;
var gameState = 0;
var playerCount,database,form,game,player;

function setup(){
    database= firebase.database();
    canvas = createCanvas(400,400);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}