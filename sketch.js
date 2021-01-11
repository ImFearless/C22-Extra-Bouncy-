const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,myground;
var ball;
function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var options={
   isStatic:true

  }

  myground=Bodies.rectangle(400,400,800,40,options)
  World.add(myworld,myground)
  var ball_options={
    restitution:3.5
 
   }


 ball=Bodies.circle(400,-50,30,ball_options)
  console.log(myground.position.x)
  World.add(myworld,ball)
}

function draw() {
  background(0); 
  Engine.update(myengine)
  rectMode(CENTER)
  rect(myground.position.x,myground.position.y,800,40)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  
}