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
let deci = false;
let lenth

let numArr = [ seven, eight,  nine, four, five, six, one, two, three,  zero]
let operatorArr = [ negative,  clear, percentage, divide, multi, subtract, addition, decimal]

allBtns = [value, negative, clear, percentage, divide, seven, eight, nine, multi, four, five, six, subtract, one, two, three, addition, zero, decimal, equals]

numArr.forEach( (e) => {
    e.addEventListener("click", () => {
        if (operator === "") {
        num1 = Number(value.innerText);
        }
        console.log(value.innerText.length);
        if (value.innerText.length < 5) {
            value.style.fontSize = "100px"
            total = e.innerText;
            value.innerText =  value.innerText + total;
        }
        else if (value.innerText.length >= 5) {
            value.style.fontSize = "60px"
            total = e.innerText;
            value.innerText =  value.innerText + total;
        }
        if (erase === true){
            value.innerText = num1;
            erase = false;
            deci = false
        }

        e.classList.remove("numAnimation");
        e.offsetWidth
        e.classList.add("numAnimation");

        
    })
});


// Buttons
//
//math operators
addition.addEventListener("click", () => {
    erase = true;
    operator = "+";
    console.log("add");
    addition.classList.remove("opAnimation");
    addition.offsetWidth
    addition.classList.add("opAnimation");
})

subtract.addEventListener("click", () => {
    erase = true;
    operator = "-";
    console.log("minus");
    subtract.classList.remove("opAnimation");
    subtract.offsetWidth
    subtract.classList.add("opAnimation");
})

multi.addEventListener("click", () => {
    erase = true;
    operator = "*";
    console.log("Multi");
    multi.classList.remove("opAnimation");
    multi.offsetWidth
    multi.classList.add("opAnimation");
})

divide.addEventListener("click", () => {
    erase = true;
    operator = "/";
    console.log("divide");
    divide.classList.remove("opAnimation");
    divide.offsetWidth
    divide.classList.add("opAnimation");
})
//
//operators
clear.addEventListener("click", () => {
    value.innerText = "0"
    num1 = 0;
    erase = true
    clear.classList.remove("setAnimation");
    clear.offsetWidth
    clear.classList.add("setAnimation");
});

negative.addEventListener("click", () => {
    num1 = num1 * -1;
    value.innerText = num1;
    negative.classList.remove("setAnimation");
    negative.offsetWidth
    negative.classList.add("setAnimation");
});

percentage.addEventListener("click", () => {
    num1 =(num1 /100)
    console.log(num1)
    erase = true;
    value.innerText = num1.toString()
    percentage.classList.remove("setAnimation");
    percentage.offsetWidth
    percentage.classList.add("setAnimation");
})

decimal.addEventListener("click", () => {
    if (deci !== true) {
    deci = true;
    value.innerText =  value.innerText + ".";
    }
    decimal.classList.remove("numAnimation");
    decimal.offsetWidth
    decimal.classList.add("numAnimation");

})

//
//

equals.addEventListener("click", () => {
    equals.classList.remove("opAnimation");
    equals.offsetWidth
    equals.classList.add("opAnimation");
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