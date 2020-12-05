
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Stone1 = new Stone(100,100,50,50);

	Mango1 = new Mango(960,308,50,50);
	Mango2 = new Mango(970,250,50,50);
	Mango3 = new Mango(1100,150,50,50);
	Mango4 = new Mango(1150,200,50,50);
	Mango5 = new Mango(1200,250,50,50);
	Mango6 = new Mango(1250,300,50,50);
	Mango7 = new Mango(1110,308,50,50);
	Mango8 = new Mango(1110,255,50,50);
	Mango9 = new Mango(1050,308,50,50);
	Mango10 = new Mango(1050,235,50,50);

	Sling1 = new Sling(Stone1.body,{x:240,y:400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  image(boy,200,340,200,300);
  image(tree,900,100,400,500);

  drawSprites();

  Stone1.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Sling1.display();

  cDetection(Stone1,Mango1);
  cDetection(Stone1,Mango2);
  cDetection(Stone1,Mango3);
  cDetection(Stone1,Mango4);
  cDetection(Stone1,Mango5);
  cDetection(Stone1,Mango6);
  cDetection(Stone1,Mango7);
  cDetection(Stone1,Mango8);
  cDetection(Stone1,Mango9);
  cDetection(Stone1,Mango10);
 
}

function mouseDragged() {
	Matter.Body.setPosition(Stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	Sling1.fly();
}

function cDetection(St,Mn) {
	var mpos = Mn.body.position;
	var spos = St.body.position;
	var distance = dist(spos.x,spos.y,mpos.x,mpos.y);

	if(distance<= Mn.r+St.r){
		Matter.Body.setStatic(Mn.body,false);
	}
}