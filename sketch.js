var a,b;
function setup() {
  createCanvas(800,800);
 a=createSprite(400, 200, 50, 50);
 a.shapeColor="blue"; 
 b=createSprite(400, 800, 50, 50);
 b.shapeColor="red";
 a.debug=true;
 b.debug=true;
 
 a.velocityY=1;
 b.velocityY=-1;
 
}


function draw() {
  background(255,255,255);  
  

  
  if(b.x-a.x < b.width/2+a.width/2 && a.x - b.x < a.width/2 + b.width/2 ){
  a.velocityX=a.velocityX*(-1);
  b.velocityX=b.velocityX*(-1);  
  }
  
  if( b.y -a.y < a.height/2 + b.height/2
       && a.y - b.y < a.height/2 + b.height/2) {
  a.velocityY=a.velocityY*(-1);
  b.velocityY=b.velocityY*(-1);
  }
  drawSprites();
}