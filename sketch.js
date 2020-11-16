
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ground=new Ground(width/2,670,width,20)
box=new dustbin(1200,650)
box=addAnimation(dustbingreen.png)
ball=new Ball(200,450,40)	
Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display()
 box.display()
 ball.display()
}
function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
}
}


