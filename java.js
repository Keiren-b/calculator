let calcBtns = [1,2,3,4,5,6,7,8,9,0, ' + ', ' - ',' * ',' / ',' = ','Clear']
let display = document.getElementById('display');
let totalDisplay = ''
let testNum = 0
let num1 = 0
let num2 = 0
let operator = ''
let result = 0

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

    if (operator === '+'){
        result = add(num1,num2)
        return result
    }

    else if (operator === '-'){
        result = subtract(num1,num2)
        return result
    }

    else if (operator === '*'){
        result = multiply(num1,num2)
        return result
    }

    else if (operator === '/'){
        result = divide(num1,num2)
        return result
    }
}

//button creation


function createBtn(calcBtns){

    for (let i=0; i<calcBtns.length;i++){
        const btn = document.createElement('button');
        buttonContainer.appendChild(btn);
        btn.textContent = calcBtns[i]
        btn.value = btn.textContent

       
        btn.addEventListener('click', ()=>{

        if (calcBtns[i]!=="Clear" && calcBtns[i]!=="="){
            display.textContent = display.textContent + btn.value;
            totalDisplay = totalDisplay + btn.value
        }
    
   
    })}}




createBtn(calcBtns)

function findOperator(){
    if (totalDisplay.indexOf('+')!=-1){
        operator = '+'
    }
    else if (totalDisplay.indexOf('-')!=-1){
     operator = '-'
 }
 
     else if (totalDisplay.indexOf('*')!=-1){
     operator = '*'
 }
     else if (totalDisplay.indexOf('/')!=-1){
     operator = '/'
 }
return operator}

function test(){
    let btn = document.getElementById('buttonContainer').children.item(14)
    btn.addEventListener('click', ()=>{
        findOperator()
        num1=parseInt(totalDisplay.slice(0, totalDisplay.indexOf(operator)))
        num2=parseInt(totalDisplay.slice(totalDisplay.indexOf(operator)+2))
        operate(operator, num1, num2)
        alert(result)
        updateTextContent()
    })}

test()

function updateTextContent(){
    display.textContent = result
}



    



