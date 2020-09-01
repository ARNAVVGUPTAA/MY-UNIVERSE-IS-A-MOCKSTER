class Game {
    constructor(){
        //have to make it local storage!!!!!!
        this.level = 0;
        this.rating = 0;
        
        this.wins = 0;
        this.loses = 0;

        this.image = loadImage("p1.png");
        this.image1 = loadImage("spaceguy.png");

        this.guy = createSprite(100, 100, 30, 30);
        this.guy.setCollider("circle", 0, 0, 250);
        this.guy.addImage(this.image1);
        this.guy.scale = 0.2

        this.button = createImg('dig.png');
        this.button.position(700,500);
        this.button.hide();

        this.isMoving = false;

        this.position = {
            x: 400,
            y: 300
        }
        this.angle = 0;
    }

    update(){
        
        this.button.show();
        /*
        I know the current position...
        I know the centre..
        Now I have to create a general theme that can encompass all the possible positions of the guy
        */
        
        if(playState === 2){
            this.guy.x = 670;
            this.guy.y = 300;
            this.guy.rotation = 90;
            
            if(keyDown("up")){
                playState = 3;
            }
        }
        this.guy.visible = true;
        
        imageMode(CENTER);
        image(this.image, this.position.x, this.position.y, 580, 580);
        
        if(playState === 3){

            this.guy.x = this.position.x + 270 * cos(this.angle) ;
            this.guy.y = this.position.y - 5 + 270 * sin(this.angle);
            
            if(keyDown("up")){
                this.angle++;
                this.guy.rotation += 1;
            }
            if(keyDown("down")){
                this.angle--;  
                this.guy.rotation -= 1;
            }    
            
            this.button.mousePressed(()=>{
                if(isKeyPressed === false){
                    playState++;
                }
            });
        }
        if(playState === 4){
            
            if(this.isMoving === false){
                if(this.guy.x > 400){
                    this.guy.x --; 
                }    
                if(this.guy.x < 400){
                    this.guy.x ++;
                }
                //Being in 10th paid off :)
                this.guy.y = tan(this.angle) * (this.guy.x - 400) + 300;
            }
            if(keyDown(UP_ARROW)||keyDown(DOWN_ARROW)||keyDown(RIGHT_ARROW)||keyDown(LEFT_ARROW)){
                if((this.guy.x + 100 - this.position.x)^2 + (this.guy.y + 100 - this.position.y)^2 > 270^2){
                    this.isMoving = true;
                    this.guy.rotation = 0;
                    playState === 5;
                }
            }    
        }
        if(playState === 5){
            
        }
    } 

}
