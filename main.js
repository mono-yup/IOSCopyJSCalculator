let total;
let erase = true;
let value = document.getElementById("value");
let negative = document.getElementById("negative");
let clear = document.getElementById("clear");
let percentage = document.getElementById("percentage");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multi = document.getElementById("multi");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let subtract = document.getElementById("subtract");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let addition = document.getElementById("addition");
let zero = document.getElementById("zero");
let decimal = document.getElementById("decimal");
let equals = document.getElementById("equals");
let num1;
let num2;
let operator = "";

let numArr = [ seven, eight,  nine, four, five, six, one, two, three,  zero, decimal]
let operatorArr = [ negative,  clear, percentage, divide, multi, subtract, addition]

numArr.forEach( (e) => {
    e.addEventListener("click", () => {
        console.log(Number(e.innerText));
        total = e.innerText;
        if (erase === true){
            value.innerText = "";
            erase = false;
        }
        value.innerText =  value.innerText + total;

        if (operator === "") {
        num1 = Number(value.innerText);
        console.log(num1)
        }

        
    })
});

// Buttons
let btns = document.querySelectorAll(".btn")
//
//math operators
addition.addEventListener("click", () => {
    erase = true;
    operator = "+";
    console.log("add");
    addition.classList.replace("")
})

subtract.addEventListener("click", () => {
    erase = true;
    operator = "-";
    console.log("minus");
})

multi.addEventListener("click", () => {
    erase = true;
    operator = "*";
    console.log("Multi");
})

divide.addEventListener("click", () => {
    erase = true;
    operator = "/";
    console.log("divide");
})
//
//operators
clear.addEventListener("click", () => {
    value.innerText = "0"
    num1 = 0;
    erase = true});

negative.addEventListener("click", () => {
    num1 = num1 * -1
    value.innerText = num1});

percentage.addEventListener("click", () => {
    num1 =(num1 /100)
    console.log(num1)
    erase = true;
    value.innerText = num1.toString()
})

//
//

equals.addEventListener("click", () => {
    num2 = Number(value.innerText);
    if (operator === "+"){
        num1 = num1 + num2;
        value.innerText = num1;
    }
    else if (operator === "-"){
        num1 = num1 - num2;
        value.innerText = num1;
        }
    else if (operator === "*"){
        num1 = num1 * num2;
        value.innerText = num1;
        }
    else if (operator === "/"){
        num1 = num1 / num2;
        value.innerText = num1;
        }
    operator = "";
    erase = true;
}) 