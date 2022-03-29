var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaImage=loadImage("sea.png") 

} 
function setup() {
  createCanvas(600,300);
  sea=createSprite(200,200,600,10);

ship=createSprite(70,180,20,20)
ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea.addImage(seaImage)
sea.scale=0.3
}
function draw() {
background("white")
sea.velocityX=-2;
if(sea.x<10){
sea.x=sea.width/8
}
drawSprites() 
  
}
  
  
  




 
