const show = document.getElementById("show")

const numberBtns = document.getElementById("number-btns").children;
const equalsBtn = document.getElementById("equals-btn");
const operatorBtns = document.getElementById("operator-btns").children;
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("input")

let num1; 
let num2;
let operator; 
let inputVal
let result;

// Below could be solution to adding /subtracting etc more than 2 numbers at a time
// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number
//     }
//     return result
// }

// const total = sum(1,2,3,45,)

// console.log(`Your total is ${total}`)






// Clearing everything
clearBtn.addEventListener("click", () => {
    input.value = "";
    num1 = "";
    num2 = "";
    operator = "";
    inputVal = "";
    result = "";
})


// Making operator buttons work
for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", function (){
        let operatorValue = operatorBtn.textContent;
        operator = operatorValue;
        input.value += operator;   

    })
}

            

// Making number buttons work
for (const numberBtn of numberBtns) {
    numberBtn.addEventListener("click", function () {
        let numBtn = numberBtn.textContent;     
        input.value += numBtn;                        
    })
}



// to make calculator work when you type into input 
equalsBtn.addEventListener("click", function () {
    inputVal = input.value.split("");
    let inputVal1;
    let inputVal2;
   
    if (inputVal.includes("+")) {          
            inputVal1 = Number(inputVal.slice(0, inputVal.indexOf("+")).join(""))            
            inputVal2 = Number(inputVal.slice(inputVal.indexOf("+")+1).join("")) 
            operator = "+"
            num1 = inputVal1
            num2 = inputVal2
                        
    }
    else {
        inputVal1 = ""
  }
           
    result = operate (num1, operator, num2)

    input.value = `${num1} ${operator} ${num2} = ${result}`
})



function add () {
    let resultAddd = num1 + num2
    return resultAddd
}
function subtract () {
    let resultSubtract = num1 - num2
    return resultSubtract
}
function multiply () {
    let resultMultiplty = num1 * num2
    return resultMultiplty
}
function divide () {
    let resultDivide = num1 / num2
    return resultDivide
}


function operate (num1, operator, num2) {  
    
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply (num1, num2)
    } else if (operator === "/") {
        return divide (num1, num2)
    }
}


// // Making number buttons work

// for (const numberBtn of numberBtns) {
//     numberBtn.addEventListener("click", function () {
//         let numBtn = numberBtn.textContent;     

//         if (operatorBtnNClicked) {
//             numValue1.push(numBtn);
//             num1 = Number(numValue1.join(""));          
//             input.value = num1;
            
//         } else {
//             numValue2.push(numBtn);
//             num2 = Number(numValue2.join(""));input.value += " " + num2;   
//             input.value = num1 + operator + num2;                        
//         }
            
//     })
// }