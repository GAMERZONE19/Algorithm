var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 40);
  movingrect=createSprite(600,200,60,40);

  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";
}



function draw() {
  background("black");
  movingrect.x=mouseX;
  movingrect.y=mouseY  ;

  if(movingrect.x - fixedrect.x < movingrect.width/2+ fixedrect.width/2 && 
    fixedrect.x - movingrect.x <  movingrect.width/2+ fixedrect.width/2 &&
    movingrect.y- fixedrect.y < movingrect.height/2+ fixedrect.height/2 && 
    fixedrect.y - movingrect.y <  movingrect.height/2+ fixedrect.height/2
    ){
      fixedrect.shapeColor="red";
      movingrect.shapeColor="red";
      
  }
  else{
    fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";
  }
  drawSprites();

}