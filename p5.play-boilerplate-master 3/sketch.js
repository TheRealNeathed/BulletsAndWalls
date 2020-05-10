var wall,thickness
var bullet,speed,weight






function setup(){
var canvas = createCanvas(1600,400);
background("white")
thickness = random(22,83)
wall = createSprite(1200,200,thickness,height/2)
bullet = createSprite(50,20,20,10)
bullet.tint("white")
wall.tint(80,80,80)
speed= random(223,321)
weight = random(30,52)
bullet.velocityX = speed/50





}


function draw(){


if (hasCollided(bullet,wall)){

  bullet.velocityX = 0
  var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness)
  if (damage>10){


    wall.shapeColor = color(255,0,0)
  }
if (damage<10){


  wall.shapeColor = color(0,255,0)
}

}


}