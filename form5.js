class Root{
    constructor(){
        this.input = createInput("Enter the number");
        this.square = createButton();
        this.cube = createButton();
        this.back = createButton();
    }
    display(){
        this.input.position(140,100);

        this.square.html("Square");
        this.square.position(170,150);
        this.square.mousePressed(() => {
            givenOperation2 = "sq"
            numB = this.input.value();
        });

        this.cube.html("Cube");
        this.cube.position(240,150);
        this.cube.mousePressed(() => {
            givenOperation2 = "cb"
            numB = this.input.value();
        });

        this.back.html("<<Back");
        this.back.position(10,450);
        this.back.mousePressed(() => {
            gameState = 0;
            numB = Number.NaN;
            this.input.hide();
            this.square.hide();
            this.cube.hide();
            this.back.hide();
        })
    }
}