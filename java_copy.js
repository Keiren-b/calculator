let calcBtns = [1,2,3,4,5,6,7,8,9,0, '+', '-','*','/','=', '.', 'Clear']
let clickBtnTarget = ''
let firstArray = []
let calcDisplay = document.getElementById('display')
let answerDisplay = document.getElementById('answerDisplay')
calcDisplay.style.backgroundColor='pink'
let num1=0
let num2=0
let operator = ''
let operatorIndex = ''
let secondOperator = ''
let result = ''
let calc = 0




function clickTarget(e){
    
    firstArray.push(e.target.value)
    console.log(firstArray)
    calcDisplay.textContent = calcDisplay.textContent + e.target.value

    searchArray()
}

//button creation
function createBtn(calcBtns){

    for (let i=0; i<calcBtns.length;i++){
        const btn = document.createElement('button');
        buttonContainer.appendChild(btn);
        btn.textContent = calcBtns[i]
        btn.value = btn.textContent 
        btn.addEventListener('click', clickTarget)    
}}


createBtn(calcBtns)

function searchArray(){
    let operatorCheck = firstArray.filter(element => element == "+" || element == "-" || element == "*" || element == "/" )
    // if (firstArray.includes('Clear')===true){
        
    // }

    if (firstArray.includes('=')===true){
        
        findOperator()
        operatorIndex = firstArray.indexOf(operator)
        findNumbers()   

            if (num1==0&&num2==0&&operator=='/'){
                alert ('Cannot divide by Zero')}
      
        operate(operator, num1, num2)
        answerDisplay.textContent = result
        
        let y = document.getElementById('buttonContainer').children

        for (let i=0; i<calcBtns.length; i++){
            y[i].removeEventListener('click', clickTarget)
        }
        calc = 1
        }
    
    if (operatorCheck.length > 1){
        
        findOperator()
        operatorIndex = firstArray.indexOf(operator)
        findNumbers()
        secondOperator = firstArray[firstArray.length-1]
        operate(operator, num1, num2)
        answerDisplay.textContent = result

        num1=result
        operator=secondOperator

        Next()
        
        //rememebr operator check isn't define as a global variable here, so any functions involving the second operator can only be performed here
    }



}


function findOperator(){
    if (firstArray.indexOf('+')!=-1){
        operator = '+'
    }
    else if (firstArray.indexOf('-')!=-1){
        operator = '-'
    }
        
    else if (firstArray.indexOf('*')!=-1){
        operator = '*'
        }
    else if (firstArray.indexOf('/')!=-1){
        operator = '/'
    }
}

function findNumbers(){
    test1 = firstArray.slice(0, operatorIndex)
    test2 = firstArray.slice(operatorIndex+1, firstArray.length-1)
    num1 = parseFloat(test1.join(''))
    num2 = parseFloat(test2.join(''))
}
    

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
    
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

function operate(operator, num1, num2){

    if (operator == '+'){
        result = add(num1,num2)
        return result
    }

    else if (operator == '-'){
        result = subtract(num1,num2)
        return result
    }

    else if (operator == '*'){
        result = multiply(num1,num2)
        return result
    }

    else if (operator == '/'){
        // if((num1=0) && (num2 = 0)){
        //     alert ('cannot divide by zero')
        // }
        // else 
        result = divide(num1,num2)
        return result
    }
}


function Next(){
    firstArray = [];
    console.log(firstArray)
    firstArray = firstArray.push(num1, operator)
    console.log(firstArray)
   calcDisplay.textContent = num1 + operator

}

const clearbtn = document.getElementById('buttonContainer').children.item(16)
clearbtn.addEventListener('click', clear)

function clear(){
    if (calc=1) {
        location.reload()
    }
    calc = 0
    display.textContent=''
    answerDisplay.textContent=''
    testNum = 0
    num1 = 0
    num2 = 0
    operator = ''
    result = 0
}




