let calcBtns = [1,2,3,4,5,6,7,8,9,0, ' + ', ' - ',' * ',' / ',' = ','Clear']
let display = document.getElementById('display');
let totalDisplay = ''
let num1 = 0
let num2 = 0
let operator = ''
let result = 0
let operatorCount = 0
let evalCount = 0
let secondOperator = ''


 window.addEventListener('click', listenerOn)



//button creation
function createBtn(calcBtns){

    for (let i=0; i<calcBtns.length;i++){
        const btn = document.createElement('button');
        buttonContainer.appendChild(btn);
        btn.textContent = calcBtns[i]
        btn.value = btn.textContent          
}}

createBtn(calcBtns)

// this function allows each button to display its value on screen
function displayBtnValue(){

    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event =>{

            // if (item.value == " = "){
            //     return
            // }
            if (item.value !=="Clear" && item.value !== " = "){
                
                    display.textContent = display.textContent + item.value;
                    //below may be unessary
                    totalDisplay = totalDisplay + item.value;
            }
            if (item.value == " = "){
                operatorCount=0
            }
            if (item.value == " + " || item.value == " - " ||item.value == " * " ||item.value == " / "){
                operatorCount++
            }
            if (operatorCount>1){
                test()
            }

   
})




})}
                    
                 
        

    
        

displayBtnValue()


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

// function findFirstOperatorFromMany(){
//         let slicedDisplay = totalDisplay.slice(0, -3)

//         if (slicedDisplay.indexOf('+')!=-1){
//             operator = '+'
//         }
//         else if (slicedDisplay.indexOf('-')!=-1){
//             operator = '-'
//         }
            
//         else if (slicedDisplay.indexOf('*')!=-1){
//             operator = '*'
//             }
//         else if (slicedDisplay.indexOf('/')!=-1){
//             operator = '/'
//         }
//     return operator}

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

function breakUpDisplay(){
    if (operatorCount>1){
        secondOperator = totalDisplay.slice(-2,-1)
    }
    findOperator()
    num1=parseInt(totalDisplay.slice(0, totalDisplay.indexOf(operator)))
    num2=parseInt(totalDisplay.slice(totalDisplay.indexOf(operator)+2))
}

function answerTextContent(){
    answerDisplay.textContent = result
}
function clear(){
    

        display.textContent=''
        totalDisplay=''
        answerDisplay.textContent=''
        testNum = 0
        num1 = 0
        num2 = 0
        operator = ''
        result = 0
        evalCount = 0
    
}
function reSet(e) {

    display.textContent= e.target.value
    totalDisplay= e.target.value
    answerDisplay.textContent=''
    testNum = 0
    num1 = 0
    num2 = 0
    operator = ''
    result = 0;
    clicked = 1
}

const clearbtn = document.getElementById('buttonContainer').children.item(15)
clearbtn.addEventListener('click', clear)

function test(){
    // if (operatorCount>1){
        
    //     breakUpDisplay()
    //     num1=parseInt(totalDisplay.slice(0, totalDisplay.indexOf(operator)))
    //     num2=parseInt(totalDisplay.slice(totalDisplay.indexOf(operator)+2,-3))

    //     operate(secondOperator, num1, num2)
    //     answerTextContent() 
    //     display.textContent= result + " " + totalDisplay.charAt(totalDisplay.length-2) + " "
    //     totalDisplay= result + " " + totalDisplay.charAt(totalDisplay.length-2) + " "
    //     answerDisplay.textContent=result
    //     testNum = 0
    //     num1 = 0
    //     num2 = 0
    //     operator = ''
    //     operatorCount = 1
    //     // result = 0;
        evalCount++
        //separates out text content
        breakUpDisplay()
        //performs calculations
        operate(operator, num1, num2)
        //updates answer box text content
        answerTextContent() 
        // counter += counter
        // nextMove()
        return  
    }
    //adds click listener to equals button
    

    
    
   
    
        

  


let equalsBtn = 
equalsBtn.addEventListener('click', test)



// these two functions determine if the next click is a number button, and if so stores that number as the new num 1 
function listenerOn(e){

    if (evalCount=0){
        return
    }

     else if (evalCount>0 && e.target.value<10){
         
        display.textContent= e.target.value
        totalDisplay= e.target.value
        answerDisplay.textContent=''
        testNum = 0
        num1 = 0
        num2 = 0
        operator = ''
        result = 0;
        window.removeEventListener('click', listenerOn)
    }

    else if (e.target.value == " + " || e.target.value == " - "||e.target.value == " * "||e.target.value == " / "){

        display.textContent= result + ' ' + e.target.value
        totalDisplay= result + ' ' + e.target.value
        answerDisplay.textContent=''
        testNum = 0
        num1 = 0
        num2 = 0
        operator = ''
        result = 0;
        window.removeEventListener('click', listenerOn)
}
}


// function nextMove(){
//  window.addEventListener('click', listenerOn)
     
//      }
    


    