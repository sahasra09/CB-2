
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bin1,bin2,bin3;
var ob1;
var ground;
var binny,binnyImg;

function preload(){
binnyImg=	loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binny=createSprite(1040,510,250,300);
	binny.addImage(binnyImg)
	binny.scale=0.7;
	bin1 = new Bin(1240,510,250,300);
//	bin1.shapeColor="white";
	bin2 = new Bin(960,510,20,160);
//	bin2.shapeColor="white";
	bin3= new Bin(1080,580,250,20);
	//bin3.shapeColor="white";
	ob1=new Ppaper(200,340);
//	ob1.scale=0.5;
	ground=new Ground(width/2,640,width,20);
	Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
 
  
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  ob1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ob1.body,ob1.body.position,{x:110,y:-110})
	}
}

