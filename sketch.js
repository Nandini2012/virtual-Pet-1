//Create variables here

var dog,dog1,dog2,database,foodS,foodstock;

function preload()
{
  dog1 = loadImage("../images/dogImg.png");
  dog2 = loadImage("../images/dogImg1.png");
	//load images here
}

function setup() {

  database = firebase.database();
  console.log(database);
	createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dog1);
  dog.scale = 0.1;

  foodS=database.ref('Food');
  foodS.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
  drawSprites();
  //add styles here
textSize(20);
stroke("white");
fill("white");
text("Food Remaining:"+foodS,200,200);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(){

database.ref('/').update({
 // Food:x
})

}






                               

