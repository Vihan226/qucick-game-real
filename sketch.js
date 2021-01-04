
var rect1,rect2,rect3,rect4,rect5;
var joker, jokerImage;
var climber;
var climber2;
var climberImage;
var edges;
var backgroundImage;
var score;
var death;
var coin,coin2;
var coinImage;
var nightbg;
var ghostImage;
var ghost;
function preload(){
  climberImage=loadImage("climber.png")
  jokerImage=loadImage("rjoker.png")
  backgroundImage=loadImage("bgusebackground.png")
  coinImage= loadImage("rcoin.png")
  nightbg= loadImage("nightbackground.jpg")
  ghostImage= loadImage("ghost-standing.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  climber=createSprite(width/1-width/2,height/2-100)
  climber.scale=1.5
  climber.addImage("climbertop",climberImage)
  rect1=createSprite(width/1-width/2,height/2-115,150,5)
  rect1.visible=false
  joker=createSprite(width/1.4-width/2,height/2+100)
  joker.addImage("joker",jokerImage)
  joker.scale=.6
  rect2=createSprite(width/1-width/2,height/2+230,1200,10)
rect2.shapeColor="blue"
rect2.visible=false;
coin=createSprite(width/1-width/2,height/2-110)
coin.addImage("coin",coinImage)
coin.scale=.125

climber2=createSprite(width/1-width/2,height/2+100)
climber2.addImage("climber",climberImage)
climber2.scale=1.5

rect3=createSprite(width/1-width/2,height/2+85,150,5)
rect3.visible=false

coin2=createSprite(width/1.2-width/2,height/2+60)
coin2.addImage("coin",coinImage)
coin2.scale=.125

rect4=createSprite(width/.8-width/2,height/2+70,40,40)
rect4.shapeColor="red"
rect4.visible=true

rect5=createSprite(width/.8-width/2,height/2-140,40,40)
rect5.shapeColor="red"
rect5.visible=true

ghost=createSprite(width/1.4-width/2,height/2+100)
ghost.addImage("ghost",ghostImage)
ghost.scale=.4
ghost.visible=false

  climber.velocityX=-10
 climber2.velocityX=12
  rect1.velocityX=-10

  rect3.velocityX=12

  score=0
  death=0
  
}

function draw() {
  background(backgroundImage);
 textSize(50)
 fill("blue")
  text("Score: "+score,width/1.5-width/2,height/2-150)
  text("Deaths: "+death,width/1-width/2,height/2-150)
  
 edges=createEdgeSprites();

 climber.bounceOff(edges)
 climber2.bounceOff(edges)
 rect1.bounceOff(edges)
 rect3.bounceOff(edges)

 
if(joker.isTouching(climber)||ghost.isTouching(climber)){
  death=death+1
}
if(joker.isTouching(climber2)||ghost.isTouching(climber2)){
  death=death+1
}

if(joker.isTouching(rect1)||ghost.isTouching(rect1)){
  joker.x=rect1.x
  joker.y=rect1.y
joker.collide(rect1)

ghost.x=rect1.x
ghost.y=rect1.y
ghost.collide(rect1)
}

if(joker.isTouching(rect3)){
  joker.x=rect3.x
  joker.y=rect3.y
joker.collide(rect3)

ghost.x=rect3.x
ghost.y=rect3.y
ghost.collide(rect3)
}

if(keyDown("UP_ARROW") && joker.y >=20||touches.length>0){
  joker.velocityY=-10;
  ghost.velocityY=-10
  touches=[]

}
joker.velocityY = joker.velocityY + 0.8
ghost.velocityY = ghost.velocityY + 0.8
if(joker.isTouching(coin)){
  score=score+5
}
if(joker.isTouching(coin2)||ghost.isTouching(coin2)){
  score=score+5
}

if(joker.isTouching(rect4)||ghost.isTouching(rect4)){
  death=death+5
}
if(joker.isTouching(rect5)||ghost.isTouching(rect5)){
  death=death+5
}
if(score>1000){
  background(nightbg)
  textSize(50)
  fill("red")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=true
   joker.visible=false
}
if(score>2000){
  background(backgroundImage)
  textSize(50)
  fill("blue")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=false
   joker.visible=true
}
if(score>3000){
  background(nightbg)
  textSize(50)
  fill("red")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=true
   joker.visible=false
}
if(score>4000){
  background(backgroundImage)
  textSize(50)
  fill("blue")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=false
   joker.visible=true
}
if(score>5000){
  background(nightbg)
  textSize(50)
  fill("red")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=true
   joker.visible=false
}
if(score>6000){
  background(backgroundImage)
  textSize(50)
  fill("blue")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=false
   joker.visible=true
}
if(score>7000){
  background(nightbg)
  textSize(50)
  fill("red")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=true
   joker.visible=false
}
if(score>8000){
  background(backgroundImage)
  textSize(50)
  fill("blue")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=false
   joker.visible=true
}
if(score>9000){
  background(nightbg)
  textSize(50)
  fill("red")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=true
   joker.visible=false
}
if(score>10000){
  background(backgroundImage)
  textSize(50)
  fill("blue")
   text("Score: "+score,width/1.5-width/2,height/2-150)
   text("Deaths: "+death,width/1-width/2,height/2-150)
   ghost.visible=false
   joker.visible=true
}
if(death>400){
  background("black")
  coin.destroy();
  coin2.destroy()
  joker.visible=false
  climber.visible=false
  climber2.visible=false
  rect4.visible=false
  rect5.visible=false
textSize(45)
fill("green")
  text("You have lost the game try to beat your score ",width/1.95-width/2,height/2)
  text("Your score was: "+score,width/1.25-width/2,height/2+100)
text("Refresh the game",width/1.25-width/2,height/2-100)
}

joker.collide(rect2)

ghost.collide(rect2)


 drawSprites();
    
}

  