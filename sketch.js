var ground
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

 trex = createSprite(50, 180, 20, 50);
 ground = createSprite(200, 200, 500, 5)
 trex.addAnimation("running", trex_running)
 trex.scale=0.5
 trex.x=50

}

function draw(){
background("white")
trex.collide(ground)
if (keyDown("space")) {
    trex.velocityY=-2
  } 
trex.velocityY=trex.velocityY+0.8
drawSprites();
}
