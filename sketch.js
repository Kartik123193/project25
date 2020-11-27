const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(500,height,1000,20);
  paper = new Paper(100,80,40)
  wall1 = new Block(660,630);
  

	Engine.run(engine);
  
}

function draw() {
  background(220);
Engine.update(engine)
  rectMode(CENTER);
  paper.display();
 
ground.display();
wall1.display();
  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-73})
 }
}