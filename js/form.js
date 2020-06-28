class Form {
    constructor(){
        this.input = createInput("NAME");
        this.slider = createSlider(0,99,20,1);
        this.button = createButton("START THE GAME");
    }

    display(){

        this.input.position(330,100);
        this.button.position(340,430);

        this.slider.position(150,300);
        this.slider.size(500);
        
        push();
        fill(175);
        textSize(30);
        textFont("ARIEL")
        text("YOUR AGE: " + this.slider.value(), 310, 250);
        pop();

        this.button.mousePressed(()=>{
            localStorage.setItem("name", this.input.value());
            localStorage.setItem("age", this.slider.value());
            playState++;
            
            this.input.hide();
            this.slider.hide();
            this.button.hide();
        });

    }
}