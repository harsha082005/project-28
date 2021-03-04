
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy1,pos;
var ground,gpos;
var stone,spos
var Twall1,Twall2
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var tree;

function preload()
{

}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	boy1 = new Boy(300,475);
	ground = new Ground(100,590,3800,20);
	stone = new Stone(160,380,40);
	mango1 = new Mango(800,280,30);
	mango2 = new Mango(980,290,40);
	mango3 = new Mango(900,200,36);
	mango4 = new Mango(1000,150,30);
	mango5 = new Mango(1100,180,30);
	mango6 = new Mango(1200,260,30);
	mango7 = new Mango(1120,300,30);
	



	
	chain = new Chain(stone.body,{x:200, y:380});
	tree = new Tree(1000,320);

	

	Engine.run(engine);
  
}


function draw() {
	background("lightblue");

	fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 100,80);
	
	boy1.display();
	tree.display();
	chain.display();
	stone.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	
  

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(touches.length>0||keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:200, y:500});
	  chain.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }
  

