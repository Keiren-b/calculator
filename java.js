let calcBtns = [1,2,3,4,5,6,7,8,9,0, ' + ', ' - ',' * ',' / ',' = ','Clear']
let display = document.getElementById('display');
let totalDisplay = ''
let num1 = 0
let num2 = 0
let operator = ''
let result = 0

//button creation


function createBtn(calcBtns){

    for (let i=0; i<calcBtns.length;i++){
        const btn = document.createElement('button');
        buttonContainer.appendChild(btn);
        btn.textContent = calcBtns[i]
        btn.value = btn.textContent          
}}

createBtn(calcBtns)

// this function separates out the creat buttons function and the function that allows each button to display its value on screen
function displayBtnValue(){

    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event =>{
            if (item.value !=="Clear" && item.value !== " = "
                
                ){

                display.textContent = display.textContent + item.value;
                //below may be unessary
                totalDisplay = totalDisplay + item.value
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
        // if((num1=0) && (num2 = 0)){
        //     alert ('cannot divide by zero')
        // }
        // else 
        result = divide(num1,num2)
        return result
    }
}

function test(){
    let btn = document.getElementById('buttonContainer').children.item(14)
    btn.addEventListener('click', () =>{
        findOperator()
        num1=parseInt(totalDisplay.slice(0, totalDisplay.indexOf(operator)))
        num2=parseInt(totalDisplay.slice(totalDisplay.indexOf(operator)+2))
        operate(operator, num1, num2)

        updateTextContent()
        // secondFunction()
        nextEval()
     
    })}

test()

function updateTextContent(){
    answerDisplay.textContent = result
    num1 = result


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
    
}

function secondFunction(){
   
    document.getElementById('buttonContainer').children.item(0).addEventListener('click', e =>{
        if (e.target = document.getElementById('buttonContainer').children.item(0)){
            alert('hello')
        }
    })
    display.textContent=''
    totalDisplay=''
    answerDisplay.textContent=''
    num1 = 0
    num2 = 0
    operator = ''
    result = 0

}

const clearbtn = document.getElementById('buttonContainer').children.item(15)
clearbtn.addEventListener('click', clear)

//this assigns class names to the number and operator buttons
for (let j=0; j<calcBtns.length;j++){

    if(j<=9){
        const numberBtn = document.getElementById('buttonContainer').children.item(j)
        numberBtn.className = 'numberBtn'
        numberBtn.style.color = 'red'
        }
    

    else if (j>9 && j<14){
        const numberBtn = document.getElementById('buttonContainer').children.item(j)
        numberBtn.className = 'operatorBtn'
        numberBtn.style.color = 'blue'
    }}


function nextEval(){

    document.querySelectorAll('button').forEach(item => {

        item.addEventListener('click', e => {

            if (item.value !=="Clear" && item.value !== " = "){


        answerDisplay.textContent=""
        display.textContent=''
        totalDisplay=''
        display.textContent = display.textContent + item.value
        totalDisplay=totalDisplay + item.value
        num1=0
        num2=0
        result=0
        operator=''
        
        }
    }  
        )       
    }
    )
}
// function nextEval(){
// const numberBtn8 = document.getElementsByClassName('numberBtn')

// numberBtn8.style.color = 'orange'

// numberBtn8.forEach(numberBtn8 => {
//     addEventListener('click', ()=> {
//         alert('hello')
//     })
// });
//  function nextEval(){

//     document.querySelectorAll('.numberBtn').forEach(item => {
//         item.addEventListener('click', event =>{
//             // clear()
//             // displayBtnValue()
//             // test()
            
//             num1 = event.target
//             console.log(event.target)
//             location.reload()
//         })
//     })

            

        

//      }
 

    //  num1="porcupine"
    //  num2="fuck"
    //  operator = 'doodle'
    //  displayBtnValue()