var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 700);

	// fairyVoice.play();

	fairy = createSprite(130, 450);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.3, isStatic:true,density:16,friction:6});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  console.log(starBody.position.y);
fill("yellow")
textSize(23)
  text("Press Down arrow key to make the star fall", 150, 80)
  fill("red")
  textSize(20)
  text("You can control fairy with the left, right and space keys", 120,120)
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-2;
	}

	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=2;
	}
	if(keyCode===32){
		fairy.velocityX=0;
		fairy.velocityY=0;
	}

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
	if(starBody.position.y>470){
		Matter.Body.setStatic(starBody,true);
	}

}
