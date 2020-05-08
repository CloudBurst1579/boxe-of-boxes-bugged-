var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine,world;
var boxes = [];
 
var ground;
var gSlider;
 
 
function setup() 
{
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    ground = new Barrier(200,360,400,10);
}
 
function mousePressed() 
{
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}
 
function draw() 
{
    Engine.update(engine);
    background(51);
    var fVal = gSlider.value();
 
    for (var i = 0; i < boxes.length; i++) 
    {
        boxes[i].display();
    }
    
    ground.display();

    noStroke();
    fill(255);
    textSize(15);
    text("Gravity " + fVal, 260, 381);
}