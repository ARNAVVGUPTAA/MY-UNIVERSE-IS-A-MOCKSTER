class Interface {
    constructor(){
        this.start = createSprite(150,140);
        this.image = loadImage("button.png");
        this.level = 0;
    }

    display(){

        
        this.start.addImage(this.image);
        this.start.scale = 0.5;
    }
}