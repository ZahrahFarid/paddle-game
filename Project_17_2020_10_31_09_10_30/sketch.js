var ball,bimg,paddle,pimg;


function preload() {
 bimg=loadImage("ball.png");
 pimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
  
  ball=createSprite(100,50);
  ball.addImage(bimg);
  ball.velocityX=5;
  
  paddle=createSprite(300,50);
  paddle.addImage(pimg);
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  
  /*left=0 right=1 up=3 down=4*/
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
 ball.bounceOff(paddle,randomVelocity());
  
if (ball.bounceOff){
  ball.velocityY=Math.random(1,8);
}
 paddle.collide(edges[0]);
 paddle.collide(edges[1]);
 paddle.collide(edges[2]);
 paddle.collide(edges[3]);
 
  
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y= paddle.y-5;
  
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+5;
     
  }
  drawSprites();
  
}

function randomVelocity()
{
  
ball.velocityY=random(2,10);
  
  
}

