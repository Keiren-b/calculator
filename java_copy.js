let calcBtns = [1,2,3,4,5,6,7,8,9,0, '+', '-','*','/','=', 'Clear']
let clickBtnTarget = ''
let firstArray = []
let calcDisplay = document.getElementById('display')
calcDisplay.style.backgroundColor='pink'
let num1=0
let num2=0
let operator = ''
let operatorIndex = ''





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

    if (firstArray.includes('Clear')===true){
        alert ('clear page')
    }

    if (firstArray.includes('=')===true){
        alert ('Evaluate function on two numbers')
        findOperator()
        operatorIndex = firstArray.indexOf(operator)
        findNumbers()
        }
        

    }

    let operatorCheck = firstArray.filter(element => element == "+" || element == "-" || element == "*" || element == "/" )
    if (operatorCheck.length > 1){
        alert ('multiple operators')
        //rememebr operator check isn't define as a global variable here, so any functions involving the second operator can only be performed here
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
    num1 = parseInt(test1.join(''))
    num2 = parseInt(test2.join(''))
}

let testArray = [1,2,3,4,5,6,7,8,9]
