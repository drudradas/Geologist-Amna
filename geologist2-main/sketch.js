const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plane1;
var stone1;
var rubber1;
var iron1;
var sand1;

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;

	// bodies

  plane1 = new Plane(600,height,1200,20)
    
  stone1 = new Stone(700,320,100,100);
  iron1 = new Iron(300,350);
  rubber1=new Rubber(900,450,70);
  hammer1 = new Hammer(10,100);

  sand1 = new Sand(505,450,10);
  sand2 = new Sand(510,450,10);
  sand3 = new Sand(515,450,10);
  sand4 = new Sand(520,450,10);
  sand5 = new Sand(525,450,10);
  sand6 = new Sand(515,445,10);
  sand7 = new Sand(520,445,10);
  sand8 = new Sand(525,445,10);
  sand9 = new Sand(530,445,10);
  sand10 = new Sand(535,445,10);
	//Engine.run(engine); You dont need Engine.run here if you give Engine.update in the function draw.
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  // display
  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
}