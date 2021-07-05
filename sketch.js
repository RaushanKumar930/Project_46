var home, ageCalculate, numberCalculate, percentCalculate, rootCalculate;
var gameState = 0;
var givenOperation = undefined, givenOperation2 = undefined;
var rectX, rectY, currentyear, birthyear, calculate1, calculate2, givenPercent, givenNumber, numB;

function setup(){
  createCanvas(500,500)

  home = new Calculate();
}

function draw(){
  background("lightgreen");

  if(gameState === 0){
    background("lightgreen");
    home.display();
    home.show();
    fill("black")
    textSize(20);
    text("Calculator", 190, 50);
  }
  if(gameState === 1){
    background("cyan");
    fill("Black");
    textSize(20);
    text("Age Calculator", 175, 50);
    find1(currentyear, birthyear);
  }
  if(gameState === 2){
    background("cyan");
    push();
    fill("cyan")
    stroke("crimson")
    ellipse(rectX, rectY, 35, 35);
    pop();
    fill("Black");
    textSize(20);
    text("Find Your Answer", 150, 50);
    find2(calculate1, calculate2);
  }
  if(gameState === 3){
    background("cyan");
    textSize(20);
    text("% of", 190, 170);
    fill("Black");
    textSize(20);
    text("Percentage", 180, 50);
    find3(givenPercent, givenNumber);
  }
  if(gameState === 4){
    background("cyan");
    textSize(20);
    fill("Black");
    text("Squares | Cubes | Roots", 130, 50);
    find4(numB);
  }
}

function find1(a,b){
  var c = a-b
  textSize(20)
  fill("darkgreen")
  text("You are " + c + " years old.",150,300)
}

function find2(number1, number2){
  if(givenOperation === "+"){
    textSize(20);
    fill("darkgreen");
    text(Number(number1) + Number(number2), 200, 300);
  }else if(givenOperation === "-"){
    textSize(20);
    fill("darkgreen");
    text(Number(number1) - Number(number2), 200, 300);
  }else if(givenOperation === "*"){
    textSize(20);
    fill("darkgreen");
    text(Number(number1) * Number(number2), 200, 300);
  } else if(givenOperation === "/"){
    textSize(20);
    fill("darkgreen");
    text(Number(number1) / Number(number2), 200, 300);
  }
}

function find3(num1,num2){
  var result = num1/100 * num2;
  textSize(20)
  fill("darkgreen")
  text("The Answer is " + result, 150, 300);
}

function find4(num){
  var result2
  if(givenOperation2 === "sq"){
    result2 = num*num;
  }else if(givenOperation2 === "cb"){
    result2 = num*num*num;
  }

  var len = String(result2).length * 5
  text(result2, width/2 - len,250);
}