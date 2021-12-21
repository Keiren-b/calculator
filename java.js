function add(num1,num2){
    let result = num1+num2
    return result
}

function subtract(num1,num2){
    let result = num1-num2
    return result
}

function multiply(num1,num2){
    let result = num1*num2
    return result
}

function divide(num1,num2){
    let result = num1/num2
    return result
}

function operate(operator, num1, num2){

    if (operator === '+'){
        let result = add(num1,num2)
        return result
    }

    else if (operator === '-'){
        let result = subtract(num1,num2)
        return result
    }

    else if (operator === '*'){
        let result = multiply(num1,num2)
        return result
    }

    else if (operator === '/'){
        let result = divide(num1,num2)
        return result
    }

}

//button creation
const calc = document.createElement('div')

const btnNum1 = document.createElement('button')
btnNum1.textContent = "1"
buttonContainer.appendChild(btnNum1)

const btnNum2 = document.createElement('button')
btnNum2.textContent = "2"
buttonContainer.appendChild(btnNum2)

const btnNum3 = document.createElement('button')
btnNum3.textContent = "3"
buttonContainer.appendChild(btnNum3)

const btnNum4 = document.createElement('button')
btnNum4.textContent = "4"
buttonContainer.appendChild(btnNum4)

const btnNum5 = document.createElement('button')
btnNum5.textContent = "5"
buttonContainer.appendChild(btnNum5)

const btnNum6 = document.createElement('button')
btnNum6.textContent = "6"
buttonContainer.appendChild(btnNum6)

const btnNum7 = document.createElement('button')
btnNum7.textContent = "7"
buttonContainer.appendChild(btnNum7)

const btnNum8 = document.createElement('button')
btnNum8.textContent = "8"
buttonContainer.appendChild(btnNum8)

const btnNum9 = document.createElement('button')
btnNum9.textContent = "9"
buttonContainer.appendChild(btnNum9)

const btnAdd = document.createElement('button')
btnAdd.textContent = "+"
buttonContainer.appendChild(btnAdd)

const btnSubtract = document.createElement('button')
btnSubtract.textContent = "-"
buttonContainer.appendChild(btnSubtract)

const btnMultiply = document.createElement('button')
btnMultiply.textContent = "x"
buttonContainer.appendChild(btnMultiply)

const btnDivide = document.createElement('button')
btnDivide.textContent = "/"
buttonContainer.appendChild(btnDivide)

const btnEquals = document.createElement('button')
btnEquals.textContent = "="
buttonContainer.appendChild(btnEquals)

const btnClear = document.createElement('button')
btnClear.textContent = "Clear"
buttonContainer.appendChild(btnClear)

const display = document.getElementById('display')
display.textContent="DUMMY NUMBERS 123456789"