class Interface {
    constructor(){
        this.image = loadImage("button.png");
        this.start = createSprite(150,140);
        this.start.setCollider("rectangle", 0,0, width*0.75, height);
    }

    display(){
        
        this.start.addImage(this.image);
        this.start.scale = 0.5;

        push();
        textFont("Helvetica");
        textSize(20);
        fill("blue");
        text("LEVEL: " + game.level, 5,570);
        text("TOTAL WINS: " + game.wins, 155, 570);
        text("TOTAL LOSES: " + game.loses, 355, 570)
        pop();

        push();
        textFont("Trebuchet MS");
        textSize(15);
        fill("red");
        text("YOUR UNIVERSE IS READY TO MOCK YOU....",300,50);
        text("AND IT'S GONE CRAZY BEING BORED FOR SUCH A LONG TIME",300,70);
        text("CAN KILL YOU IF IT LIKES TO HAVE FUN... ANNOYING, ISN'T IT??",300,90);
        text("BUT YOU ARE THE ONLY 'IMMORTAL' MEMBER OF YOUR SPECIES...", 300, 110);
        text("WHISPER: THE UNIVERSE DOESN'T KNOW THAT!!!!",300,130);
        text("SO, PUT ON YOUR SOCKS AND GET READY TO SAVE YOUR OWN 'IMMORTAL'",300,150);
        text("PLANET AGAIN AND AGAIN TILL ETERNITY!!!",300,170);
        text("AND DESTROYING ANOTHER JUST LIKE YOURS",300,190);
        pop();

        push();
        textFont("Garamond");
        textSize(20);
        fill("white");
        text("CLICK ON THE START BUTTON TO TELEPORT ON YOUR PLANET!!", 150, 450);
        pop();
        this.start.visible = true; 
        if(cursor.isTouching(this.start) && mouseIsPressed){
            playState++;
        }
    }
}