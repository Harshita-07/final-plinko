const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 320;
var division = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(486,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,20);

  for(var k=0; k<=width; k=k+80){
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=10; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=10; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
 
}

function draw() {
  background('black');  
  Engine.update(engine);

  ground.display();
  if(frameCount%60=== 0) {
    particles.push(new Particle(random(10,400),10,10))
  }

  for(var p=0; p<particles.length; p++){
    particles[p].display();
  }
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k=0; k<division.length; k++){
    division[k].display();
  }
}