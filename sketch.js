var gameState = 1;
var play = 1;  
var end = 0;

var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

var survivalTime =0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();

}


function draw() {
  background("white");
  if (gameState === 1) {
    

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    
    if(keyDown("space")&& monkey.y >= 314) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.4
    
    stroke("white");
    fill("white");
    textSize(20);
    text("Score: "+score,500,50);
    
    stroke("black");
    fill("black");
    survivalTime = Math.ceil(frameCount/frameRate());
    text("Survival Time: "+survivalTime,100,50);
    
    food();
    obstacleFunction();
  }
  monkey.collide(ground);
  drawSprites();

}

function food(){    
  if(frameCount % 80 === 0){
    banana = createSprite(410,random(120, 200),10,40);
    banana.velocityX = -5;
    banana.lifetime = 80;
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
}

function obstacleFunction(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(410,325,40,40);
    obstacle.velocityX = -4
    obstacle.lifetime = 100;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.12;
    ObstacleGroup.add(obstacle);
  }
}