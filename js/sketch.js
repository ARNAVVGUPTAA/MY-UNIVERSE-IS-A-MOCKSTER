var bg1, bg2, bg3, planet1, planet1_, planet2, planet2_,form, playState = 0, interface;
let name, age, start, game, isKeyPressed = false;
//usual not working.. let's create a buffer
var buffer, cursor;
// don't forget to remove the local storage....
function setup() {

  createCanvas(800,600);

  buffer = createGraphics(width,height);

  bg1 = loadImage("bg.jpg");
  bg2 = loadImage("269176.jpg");
  bg3 = loadImage("53704.jpg");

  cursor = createSprite(0,0,5,5);
  cursor.visible = false;

  form = new Form();
  interface = new Interface();
  game = new Game();
  
 
  name = localStorage.getItem('name');

  if(name === null){
    name = "";
  }
  age = localStorage.getItem('age');
  if(age === null){
    age = "";
  }

}

function draw() {
  game.guy.debug = true;
  
  cursor.x = mouseX;
  cursor.y = mouseY;

  interface.start.visible = false;
  game.guy.visible = false;

  if(playState === 0){
    background(bg2);
    form.display();
  }
  if(playState === 1){
    background(bg3);
    interface.display();
  }
  if(playState >= 2){
    interface.start.visible = false;
    background(bg1);

    game.update();
  }

  //you have to remove them after debugging
  // *************************************************************
  localStorage.removeItem("age");
  localStorage.removeItem("name");
  // *************************************************************
  drawSprites();
}
  function keyPressed(){
    isKeyPressed = true;
  }
  function keyReleased(){
    isKeyPressed = false;
  }