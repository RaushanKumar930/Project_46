class Age{
    constructor(){
        this.currentYear = createInput("Enter The Current Year");
        this.birthYear = createInput("Enter Your Birth Year");
        this.add = createButton()
        this.back = createButton()
    }
    display(){
        this.currentYear.position(150,150);
        this.birthYear.position(150,200);
        this.add.html("Find");
        this.add.position(300,250);
        this.add.mousePressed(() => {
            if(this.currentYear.value() >= this.birthYear.value() && this.birthYear.value() > 1000){
                currentyear = this.currentYear.value();
                birthyear = this.birthYear.value();
            }else{
                currentyear = undefined
                birthyear = undefined
            }
        });
        this.back.html("<<Back");
        this.back.position(10,450);
        this.back.mousePressed(() => {
            gameState = 0;
            currentyear = Number.NaN
            birthyear = Number.NaN
            this.add.hide();
            this.back.hide();
            this.birthYear.hide();
            this.currentYear.hide();
        })
    }
}