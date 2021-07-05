class Percent{
    constructor(){
        this.percent = createInput("Percent");
        this.number = createInput("Number")
        this.find = createButton();
        this.back = createButton();
    }
    display(){
        this.percent.position(10,150);
        this.number.position(260,150);

        this.find.html("Find");
        this.find.position(400,200);
        this.find.mousePressed(() => {
            givenPercent = this.percent.value();
            givenNumber = this.number.value();
        })

        this.back.html("<<Back");
        this.back.position(10,450);
        this.back.mousePressed(() => {
            gameState = 0;
            givenPercent = Number.NaN;
            givenNumber = Number.NaN;
            this.percent.hide();
            this.number.hide();
            this.find.hide();
            this.back.hide();
        })
    }
}