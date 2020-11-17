var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
 
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white"
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,88);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  wall.shapeColor="80,80,80";
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
   var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180)
    {
      bullet.shapeColor=color(225,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100);
    {
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
  function hasCollided()
  {
    bulletRightEdge=bullet.x+bullet.width;
    wallleftEdge=wall.x;
    if(bulletRightEdge>=wallleftEdge){
      return true

    }
    return false;
  }