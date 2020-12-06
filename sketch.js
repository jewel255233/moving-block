function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 20, 25);
  fix.shapeColor="blue";
  move=createSprite(200,200,36,28);
  move.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

  move.x=World.mouseX
  move.y=World.mouseY

  console.log(fix.x-move.x)
  if(fix.x-move.x<fix.width/2+move.width/2 && move.x-fix.x<fix.width/2+move.width/2 && fix.y-move.y<fix.height/2+move.height/2 && move.y-fix.y<fix.height/2+move.height/2){
    move.shapeColor="red"
    fix.shapeColor="red"
  }
  else{
    move.shapeColor="blue"
    fix.shapeColor="blue"
  }
  drawSprites();

}