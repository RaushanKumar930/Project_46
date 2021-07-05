class Calculater{
    constructor(){
        this.initialNumber = createInput("1st Number");
        this.finalNumber = createInput("2nd Number");
        this.plus = createButton();
        this.minus = createButton();
        this.multiply = createButton();
        this.divide = createButton();
        this.back = createButton();
    }
    display(){
        this.initialNumber.position(100,100);
        this.finalNumber.position(100,150);

        this.plus.html("+");
        this.plus.position(100,200);
        this.plus.mousePressed(() => {
            givenOperation = "+";
            rectX = 112;
            rectY = 210;
            calculate1 = this.initialNumber.value();
            calculate2 = this.finalNumber.value();
        });
        
        this.minus.html("-");
        this.minus.position(150,200);
        this.minus.mousePressed(() => {
            givenOperation = "-"
            rectX = 160;
            rectY = 210;
            calculate1 = this.initialNumber.value();
            calculate2 = this.finalNumber.value();
        });

        this.multiply.html("*");
        this.multiply.position(200,200);
        this.multiply.mousePressed(() => {
            givenOperation = "*"
            rectX = 210;
            rectY = 210;
            calculate1 = this.initialNumber.value();
            calculate2 = this.finalNumber.value();
        });

        this.divide.html("/");
        this.divide.position(250,200);
        this.divide.mousePressed(() => {
            givenOperation = "/"
            rectX = 260;
            rectY = 210;
            calculate1 = this.initialNumber.value();
            calculate2 = this.finalNumber.value();
        });

        this.back.html("<<Back");
        this.back.position(10,450);
        this.back.mousePressed(() => {
            gameState = 0;
            calculate1 = Number.NaN;
            calculate2 = Number.NaN;
            rectX = undefined;
            rectY = undefined;
            this.initialNumber.hide();
            this.finalNumber.hide();
            this.plus.hide();
            this.minus.hide();
            this.multiply.hide();
            this.divide.hide();
            this.back.hide();
        })
    }
}