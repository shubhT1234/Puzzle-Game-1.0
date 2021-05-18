const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies ;
var engine,world;
var backgroundImg;
var canvas, backgroundImage;
var ranvalue;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var block1img,block2img,block3img,block4img,block5img,block6img;
var block1,block2,block3,block4,block5,block6;
var screen2;
function preload(){
  backgroundImg=loadImage("images/background.jpg");
 block1img=loadImage("images/pinkblock.png");
 block2img=loadImage("images/yellowblock.png");
 block3img=loadImage("images/orangeblock.png");
 block4img=loadImage("images/darkblueblock.png");
 block5img=loadImage("images/greenblock.png");
 block6img=loadImage("images/blueblock.png");
screen2=loadImage("images/screen2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-240);
  engine=Engine.create();
  world= engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ranvalue=Math.round(random(1,10));
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  if(playerCount == 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
    game.end();
  }
  if(frameCount%50==0){
  randomBlocks();
  }
  console.log(ranvalue);
  
  drawSprites();
}
function randomBlocks(){
  if(ranvalue==1 ){
    block1=createSprite(200,300);
    block1.addImage(block1img);
    block1.scale=0.6;

  }
  if(ranvalue==2){
    block1=createSprite(200,300);
    block2=createSprite(200,370);
     block1.scale=0.6;
     block2.scale=0.6;

    block1.addImage(block2img);
    block2.addImage(block2img);

  }
  if(ranvalue==3){
    block1=createSprite(200,300);
    block2=createSprite(270,300);
    block1.addImage(block2img);
    block2.addImage(block2img);
    block2.scale=0.6;
    block1.scale=0.6;
    block3.sclae=0.6;

  }
  if(ranvalue==4){
    block1=createSprite(200,300);
    block2=createSprite(270,300);
    block3=createSprite(340,300);
    block1.scale=0.6;
    block2.scale=0.6;
    block3.scale=0.6;

    block1.addImage(block3img);
    block2.addImage(block3img);
    block3.addImage(block3img);


  }
  if(ranvalue==5){
    block1=createSprite(200,300);
    block2=createSprite(200,370);
    block3=createSprite(200,440);
    block1.scale=0.6;
    block3.scale=0.6;

    block1.addImage(block3img);
    block2.addImage(block3img);
    block3.addImage(block3img);
    block2.scale=0.6;


  }
  if(ranvalue==6){
    block1=createSprite(200,300);
    block2=createSprite(270,300);
    block3=createSprite(270,230);
    block2.scale=0.6;
    block3.scale=0.6;

    block1.addImage(block3img);
    block2.addImage(block3img);
    block3.addImage(block3img);
    block1.scale=0.6;


  }
  if(ranvalue==7){
    block1=createSprite(200,300);
    block2=createSprite(270,300);
    block3=createSprite(340,300);
    block4=createSprite(410,300);
    block1.scale=0.6;

    block2.scale=0.6;
    block3.scale=0.6;
    block4.scale=0.6;

    block1.addImage(block1img);
    block2.addImage(block2img);
    block3.addImage(block3img);
    block4.addImage(block4img);



  }
  if(ranvalue==8){
    block1=createSprite(200,300);
    block2=createSprite(200,370);
    block3=createSprite(200,440);
    block4=createSprite(200,510);
    block2.scale=0.6;
    block3.scale=0.6;
    block4.scale=0.6;

    block1.addImage(block1img);
    block2.addImage(block2img);
    block3.addImage(block3img);
    block4.addImage(block4img);
    block1.scale=0.6;



  }
  if(ranvalue==9){
    block1=createSprite(200,300);
    block2=createSprite(270,300);
    block3=createSprite(200,230);
    block4=createSprite(270,230);
    block2.scale=0.6;
    block3.scale=0.6;
    block4.scale=0.6;

    block1.addImage(block1img);
    block2.addImage(block2img);
    block3.addImage(block3img);
    block4.addImage(block4img);
    block1.scale=0.6;



  }
  if(ranvalue==10){
    block1=createSprite(200,230);
    block2=createSprite(200,300);
    block3=createSprite(270,300);
    block4=createSprite(270,370);
    block1.scale=0.6;
    block2.scale=0.6;
    block3.scale=0.6;
    block4.scale=0.6;

    block1.addImage(block1img);
    block2.addImage(block2img);
    block3.addImage(block3img);
    block4.addImage(block4img);



  }
}