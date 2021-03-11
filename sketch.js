
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(150,100, 30);
	bob2=new Bobb(160,100,30);
	bob3=new Bob(170,100,30);
	bob4=new Bob(180,100,30);
	bob5=new Bob(190,100,30);
	roof=new Roof(200,10,30,30);
	rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new rope(bob2.body,roof.body,-bobDiameter*2,0)
	rope3=new rope(bob2.body,roof.body,-bobDiameter*2,0)
	rope4=new rope(bob2.body,roof.body,-bobDiameter*2,0)
	rope5=new rope(bob2.body,roof.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  box4.display();
  box5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 

  
}



