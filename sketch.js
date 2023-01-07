
var trex ,trex_running;
var ground, InvisibleGround, groundImage;
var cloud, cloudsGround, cloudImage, cloud2,cloud2Image;



function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloudt-removebg-preview(1).png")
  cloud2Image = loadImage("cloudt-removebg-preview.png")


}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50, 180, 20, 50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200, 180, 400,20);
  ground.addImage("ground" , groundImage)
  ground.velocityX = -4;
  ground.x = ground.width /2;

  InvisibleGround = createSprite(200, 190, 400, 10)
  InvisibleGround.visible = false;
  
  
  //crie um sprite de trex
 
}

function draw(){
  background("white")
  drawSprites();
  trex.collide(InvisibleGround )
   if (keyDown("space")){
    trex.velocityY  = -10
   }
   if (groud.x < 0) {
     groud.x = ground.width/2
    }

 
   trex.velocityY = trex.velocityY + 0.8
   spawnclouds()

}
function spawnclouds(){
  if(frameCount % 300 ===0){
    cloud = createSprite(600, 100,40,10)
    cloud.addImage(cloudImage)
    cloud.y=Math.round(random(10,70));
    cloud.scale = 0.4;
    cloud.velocityX = -3;

  }
  if(frameCount % 400 ===0){
    cloud2 = createSprite(600, 100,40,10)
    cloud2.addImage(cloud2Image)
    cloud2.y=Math.round(random(10,60));
    cloud2.scale = 0.04;
    cloud2.velocityX = -3;
  }

}
