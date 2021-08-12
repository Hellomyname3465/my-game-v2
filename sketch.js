var score=0
var coinGroup;
function preload() {
bgImage = loadImage("bg.jpg")
  player_Animation = loadAnimation("1.png","2.png","3.png")
  coin_Animation = loadAnimation("coin1.png", "coin2.png", "coin3.png","coin4.png", "coin5.png", "coin6.png")
}

function setup() {
  createCanvas(400,600);
bg = createSprite(200,100)
bg.scale = 2.3
bg.addImage(bgImage)
 player =  createSprite(200,500, 50, 50);
 player.scale = 2
player.addAnimation("player",player_Animation)

coinGroup = createGroup()
}

function draw() {
  background(255,255,255);  
  // add movements
  // create text here

camera.x = player.x;
camera.y = player.y

if(player.x > 80){

  if(keyDown("left")){
    player.x = player.x - 10
  }
}

if(player.x < 320){
  if(keyDown("right")){
    player.x = player.x + 10
  }
}

  if(keyDown("up")){
    player.y = player.y - 10
  }
 

console.log(player.y)
  if(player.y <= -300){
player.y = 200
  }
  spawnCoins()
  drawSprites();

  if(player.isTouching(coinGroup)){
    coinGroup[0].destroy()
    score = score + 1
  }
fill("black")
  textSize(30)
  text("SCORE " +score, 100, player.y-200)
  
}

function spawnCoins(){
  if(frameCount%100 == 0){
    coin = createSprite(random(100,300),-200)
    coin.scale = 0.3
    coin.addAnimation("coin",coin_Animation)
    coin.velocityY = 3
    coinGroup.add(coin)
  }

}