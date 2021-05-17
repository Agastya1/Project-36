var dog,sadDog,happyDog;
var feed, addFood, foodObj;
var fedTime, lastFed;
var foodS, foodStock;
var database;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();

  createCanvas(1000,400);
  foodObj = new Food();
  foodStock = database.ref('Food');
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
