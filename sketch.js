const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var rocket;
var monster;
var bullet;
function preload() {
  bg=loadImage("images/bg2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    rocket = new Rocket(600,250,400,500)
    monster = new Monster(600,1000,300,180);
    bullet = new Bullets(600,350,50)
    
}

function draw(){
    background(bg);
    Engine.update(engine);
    rocket.display();
    monster.display();
    bullet.display();
    detectCollision(monster,bullet);
     
}

function mouseDragged(){
    Matter.Body.setPosition(rocket.body, {x: mouseX , y: 250});
    bullet.body.position.x = rocket.body.position.x;
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setStatic(bullet.body, false)
      
    }
}

function detectCollision(monster,bullet){
	
  
  var distance=dist(monster.body.position.x, monster.body.position.y, bullet.body.position.x, bullet.body.position.y)
  	if(distance<=monster.body.r+bullet.body.r)
    {
      console.log("detected");
  	  //Matter.Body.setStatic(lmango.body,false);
    }

  }
