class Calculate{
    constructor(){
        this.calculateAge = createButton();
        this.calculator = createButton();
        this.percent = createButton();
        this.root = createButton();
    }
    show(){
        this.calculateAge.show();
        this.calculator.show();
        this.percent.show();
        this.root.show();
    }
    display(){
     this.calculateAge.html("Calculate Age");
     this.calculateAge.position(300,100);
     this.calculateAge.mousePressed(() => {
        ageCalculate = new Age();
        ageCalculate.display();
        this.calculateAge.hide();
        this.calculator.hide();
        this.percent.hide();
        this.root.hide();
        gameState = 1;
     });

     this.calculator.html("Add, Subtract, Multiply, Divide");
     this.calculator.position(250,150);
     this.calculator.mousePressed(() => {
        numberCalculate = new Calculater();
        numberCalculate.display();
        this.calculateAge.hide();
        this.calculator.hide();
        this.percent.hide();
        this.root.hide();
        gameState = 2;
     });

     this.percent.html("Percentage (%)");
     this.percent.position(300,200)
     this.percent.mousePressed(() => {
        percentCalculate = new Percent();
        percentCalculate.display();
        this.calculateAge.hide();
        this.calculator.hide();
        this.percent.hide();
        this.root.hide();
        gameState = 3
     });

     this.root.html("Squares and Cubes");
     this.root.position(285,250);
     this.root.mousePressed(() => {
        rootCalculate = new Root();
        rootCalculate.display();
        this.calculateAge.hide();
        this.calculator.hide();
        this.percent.hide();
        this.root.hide();
        gameState = 4;
     })
    }
}