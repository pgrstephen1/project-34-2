
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backGroundImage;
var monsterImage1, monsterImage2;
var superHeroImage1, superHeroImage2;

var hero;
var monster;
var ground;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10;
var rope;

//function preload(){
//backGroundImage = loadImage("GamingBackground.png");
//monsterImage1 = loadImage("Monster-01.png");
//monsterImage2 = loadImage("Monster-02.png");
//superHeroImage1 = loadImage("Superhero-01.png");
//superHeroImage2 = loadImage("Superhero-02.png");
//}

function setup() {
  createCanvas(1500,1500);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  hero = new Hero(275,350,150,25);
  rope = new Chain(hero.body, {x:275, y:290});
  monster = new Monster(950,150,70,70);

  obstacle1 = new Obstacle(775,515,30,30);
  obstacle2 = new Obstacle(775,500,30,30);
  obstacle3 = new Obstacle(775,475,30,30);
  obstacle4 = new Obstacle(775,450,30,30);
  obstacle5 = new Obstacle(775,425,30,30);
  obstacle6 = new Obstacle(805,515,30,30);
  obstacle7 = new Obstacle(805,500,30,30);
  obstacle8 = new Obstacle(805,475,30,30);
  obstacle9 = new Obstacle(805,450,30,30);
  obstacle10 = new Obstacle(805,425,30,30);

if(hero.x === monster.x && hero.y === monster.y){
}

}

function draw() {
  background("white");  


  ground.display();
  hero.display();
  rope.display();
  monster.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();
  obstacle6.display();
  obstacle7.display();
  obstacle8.display();
  obstacle9.display(); 
  obstacle10.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

