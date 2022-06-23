var inimigo;
var pc;
var tanque;
var oponente;
var fundoimg, pcimg, inimg, tanqueimg;
var JOGAR = 0;
var ENCERRAR = 1;
var gameState = JOGAR;
var score = 0;
var fundo;
var gameOver, gameoverimg;
var som;


function preload(){
 fundoimg = loadImage("base.JPG");
 pcimg = loadImage("pc.png");
 inimg = loadImage("inimigo.png");
 tanqueimg = loadImage("tanque.png");
 gameoverimg = loadImage("game_over-removebg-preview.png");
 som = loadSound("somfundo.wav");

}


function setup() {
	createCanvas(1500,500);

  fundo = createSprite(750,300,100,100);
  fundo.addImage(fundoimg);
  fundo.scale = 2.5;
  pc = createSprite(50,350,10,10);
  pc.addImage(pcimg);
  pc.scale = 0.7;
  inimigo = createSprite( 1500,random(0,500),10,10);
  inimigo.addImage(inimg);
  inimigo.scale = 0.5;
  tanque = createSprite(1500,random(0,500),10,10);
  tanque.addImage(tanqueimg);
  tanque.scale = 0.7;
  gameOver = createSprite(750,350,10,10)
  gameOver.addImage(gameoverimg);

}

function draw() {
  background(0);
  

  if(gameState === JOGAR){
    gameOver.visible = false;   
    som.play();

    if(keyDown(UP_ARROW)){
    pc.velocityY -=3;
  }

  if(keyDown(DOWN_ARROW)){
    pc.velocityY +=3;
  }
    
  if(fundo.x <600){
    fundo.x = 850;
  }

  score += 1;

  fundo.velocityX = -4;
  inimigo.velocityX = -2;
  tanque.velocityX = -2; 


  if(pc.isTouching(inimigo)){
    tanque.visible = false;
    gameState = ENCERRAR;
  }

  if(pc.isTouching(tanque)){
    inimigo.visible = false;
    gameState = ENCERRAR;
  }

}
 
if(gameState === ENCERRAR){
  inimigo.velocityX = 0;
  pc.velocityY = 0;
  tanque.velocityX = 0;
  fundo.velocityX = 0;
  gameOver.visible = true;
}

  drawSprites();
  fill("white");
  textSize(30);
  text("Pontuação: "+ score,1150,40);
}



