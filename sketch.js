
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper= new Paper(300,350,10,10)
ground= new Ground(400,340,1200,2)
dustbin1= new Dustbin(600,330,100,20)
dustbin2= new Dustbin(615,330,20,200)
dustbin3 = new Dustbin(640,330,100,20)

	//Create the Bodies Here.




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



