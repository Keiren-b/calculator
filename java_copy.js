// let calcBtns = [1,2,3,4,5,6,7,8,9,0, '+', '-','*','/','=', '.', 'Clear']
// let clickBtnTarget = ''
// let firstArray = []
// let calcDisplay = document.getElementById('display')
// let answerDisplay = document.getElementById('answerDisplay')
// calcDisplay.style.backgroundColor='pink'
// let num1=0
// let num2=0
// let operator = ''
// let operatorIndex = ''
// let secondOperator = ''
// let result = ''
// let calc = 0




// function clickTarget(e){
    
//     firstArray.push(e.target.value)
//     console.log(firstArray)
//     calcDisplay.textContent = calcDisplay.textContent + e.target.value
//     console.log(e)

//     searchArray()
// }

// //button creation
// function createBtn(calcBtns){

//     for (let i=0; i<calcBtns.length;i++){
//         const btn = document.createElement('button');
//         buttonContainer.appendChild(btn);
//         btn.textContent = calcBtns[i]
//         btn.value = btn.textContent 
//         btn.addEventListener('click', clickTarget)    
// }}


// createBtn(calcBtns)

// function searchArray(){
//     let operatorCheck = firstArray.filter(element => element == "+" || element == "-" || element == "*" || element == "/" )
//     // if (firstArray.includes('Clear')===true){
        
//     // }

//     if (firstArray.includes('=')===true){
        
//         findOperator()
//         operatorIndex = firstArray.indexOf(operator)
//         findNumbers()   

//             if (num1==0&&num2==0&&operator=='/'){
//                 alert ('Cannot divide by Zero')}
      
//         operate(operator, num1, num2)
//         answerDisplay.textContent = result
        
//         // let y = document.getElementById('buttonContainer').children

//         // for (let i=0; i<calcBtns.length; i++){
//         //     y[i].removeEventListener('click', clickTarget)
//         // }
//         // calc = 1
//         }
    
//     if (operatorCheck.length > 1){
        
//         findOperator()
//         operatorIndex = firstArray.indexOf(operator)
//         findNumbers()
//         secondOperator = firstArray[firstArray.length-1]
//         operate(operator, num1, num2)
//         answerDisplay.textContent = result

//         num1=result
//         operator=secondOperator

//         Next()
        
//         //rememebr operator check isn't define as a global variable here, so any functions involving the second operator can only be performed here
//     }



// }


// function findOperator(){
//     if (firstArray.indexOf('+')!=-1){
//         operator = '+'
//     }
//     else if (firstArray.indexOf('-')!=-1){
//         operator = '-'
//     }
        
//     else if (firstArray.indexOf('*')!=-1){
//         operator = '*'
//         }
//     else if (firstArray.indexOf('/')!=-1){
//         operator = '/'
//     }
// }

// function findNumbers(){
//     test1 = firstArray.slice(0, operatorIndex)
//     test2 = firstArray.slice(operatorIndex+1, firstArray.length-1)
//     num1 = parseFloat(test1.join(''))
//     num2 = parseFloat(test2.join(''))
// }
    

// function add(num1,num2){
//     return num1+num2
// }

// function subtract(num1,num2){
//     return num1-num2
    
// }

// function multiply(num1,num2){
//     return num1*num2
// }

// function divide(num1,num2){
//     return num1/num2
// }

// function operate(operator, num1, num2){

//     if (operator == '+'){
//         result = add(num1,num2)
//         return result
//     }

//     else if (operator == '-'){
//         result = subtract(num1,num2)
//         return result
//     }

//     else if (operator == '*'){
//         result = multiply(num1,num2)
//         return result
//     }

//     else if (operator == '/'){
//         // if((num1=0) && (num2 = 0)){
//         //     alert ('cannot divide by zero')
//         // }
//         // else 
//         result = divide(num1,num2)
//         return result
//     }
// }


// function Next(){
//     firstArray = [];
//     console.log(firstArray)
//     firstArray = firstArray.push(num1, operator)
//     console.log(firstArray)
//    calcDisplay.textContent = num1 + operator

// }

// const clearbtn = document.getElementById('buttonContainer').children.item(16)
// clearbtn.addEventListener('click', clear)

// function clear(){

//     calc = 0
//     display.textContent=''
//     answerDisplay.textContent=''
//     testNum = 0
//     num1 = 0
//     num2 = 0
//     operator = ''
//     result = 0
// }





// })



// // document.addEventListener('keydown', (event) => {

// //     if(event.key === 'a') {

// //         // do the thing you're wanting to do

// //     }

// // }

let calcBtns = ['Clear', 'Del', 'Neg', '÷', 7, 8, 9, 'x', 4,5,6,'-',1,2,3,'+', 0, '.', '=']
// [1,2,3,4,5,6,7,8,9,0, '+', '-','*','/','=', '.', 'Del', 'Clear']
let clickBtnTarget = ''
let firstArray = []
let calcDisplay = document.getElementById('display')
let answerDisplay = document.getElementById('answerDisplay')
let num1=0
let num2=0
let operator = ''
let operatorIndex = ''
let secondOperator = ''
let result = ''
let counter = 0




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
        btn.classList.add('calcBtn')
}
    // let btn = document.getElementById('buttonContainer').children 
    //     for (let i=0; i<calcBtns.length; i++){
    //         const span = document.createElement('span')
    //         btn[i].appendChild(span)
    //         span.classList.add('front')
    //     }
    
        
}

createBtn(calcBtns)

function searchArray(){
    let operatorCheck = firstArray.filter(element => element == "+" || element == "-" || element == "x" || element == "÷" )
    // if (firstArray.includes('Clear')===true){
        
    // }

    let filter = firstArray.filter(element => element =='.')
    let opFilter = firstArray.filter(element => element =='+' || element == '-' || element=='x' || element == '÷')

    if (opFilter.length>0&&filter.length>2)
    {
        alert ('Error')
        location.reload()
    }

    else if (opFilter.length ==0 && filter.length>1){
        alert ('Error')
        location.reload()
    }

    if (firstArray.includes('=')===true){
        
        findOperator()
        operatorIndex = firstArray.indexOf(operator)
        findNumbers()   

            if (num1==0&&num2==0&&operator=='÷'){
                alert ('Cannot divide by Zero')}
      
        operate(operator, num1, num2)
        answerDisplay.textContent = result  
        
        let y = document.getElementById('buttonContainer').children
        for (let i=0; i<calcBtns.length; i++){
            y[i].removeEventListener('click', clickTarget)
            y[i].removeEventListener('click', clear)
            y[i].removeEventListener('click', deleteBtn)

            y[calcBtns.length-1].addEventListener('click', ()=>{
                location.reload()
            })
        }
        window.addEventListener('click', ()=>{
            
            counter += 1
            console.log(counter)
            if (counter >1){
                location.reload()
            }
        })
        

        
        window.removeEventListener('keydown', keyPress)

        window.addEventListener('keydown', ()=>{
            
            counter += 1
            console.log(counter)
            if (counter >1){
                location.reload()
            }
        })}
        
    

    
    else if (operatorCheck.length > 1){
        
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
        
    else if (firstArray.indexOf('x')!=-1){
        operator = 'x'
        }
    else if (firstArray.indexOf('÷')!=-1){
        operator = '÷'
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

    else if (operator == 'x'){
        result = multiply(num1,num2)
        return result
    }

    else if (operator == '÷'){
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
    firstArrau = firstArray.push(num1, operator)
    console.log(firstArray)
   calcDisplay.textContent = num1 + operator

}

const clearbtn = document.getElementById('buttonContainer').children.item(0)
clearbtn.addEventListener('click', clear)

function clear(){
    
    firstArray = []
    display.textContent=''
    answerDisplay.textContent=''
    testNum = 0
    num1 = 0
    num2 = 0
    operator = ''
    result = 0

}
function equalsClear(){
    

    display.textContent=''
    testNum = 0
    num1 = 0
    num2 = 0
    operator = ''
    result = 0

}

function deleteBtn(){
    let slicedArray = firstArray.slice(0, firstArray.length-2)
    firstArray = slicedArray
    let string = calcDisplay.textContent.toString()
    let slicedString = string.slice(0, string.length-4)
    calcDisplay.textContent = slicedString
}

const delBtn = document.getElementById('buttonContainer').children.item(1)
delBtn.addEventListener('click', deleteBtn)

function keyPress(event){

    let allowedKeyboardBtns = ['1','2','3','4','5','6','7','8','9','0', '+', '-','*','/','=', '.', 'Enter']

            
            if (allowedKeyboardBtns.includes(event.key)){

                if(event.key==='Enter'){
                    firstArray.push('=')
                    console.log('=')
                    calcDisplay.textContent = calcDisplay.textContent + '='
                
         searchArray()
        }

        else if(event.key==='/'){
            firstArray.push('÷')
            console.log('÷')
            calcDisplay.textContent = calcDisplay.textContent + '÷'
        }

        else if(event.key==='*'){
            firstArray.push('x')
            console.log('x')
            calcDisplay.textContent = calcDisplay.textContent + 'x'
        }
        else {    
            firstArray.push(event.key)
            console.log(event.key)
            calcDisplay.textContent = calcDisplay.textContent + event.key
            

            searchArray()
            }                   
        }

}

document.addEventListener('keydown', keyPress)

