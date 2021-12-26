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

let calcBtns = ['1','2','3','4','5','6','7','8','9','0',' + ',' - ',' * ',' / ',' = ','Clear']
let display = document.getElementById('display');

let x = ''





function createBtn(calcBtns){

    for (let i=0; i<calcBtns.length;i++){
        const btn = document.createElement('button');
        buttonContainer.appendChild(btn);
        btn.textContent = calcBtns[i]
  
        btn.addEventListener('click', ()=>{

            if (calcBtns[i]!=="Clear" && calcBtns[i]!=="="){
    
                display.textContent = display.textContent + btn.textContent
        }
         x = document.getElementById('display').innerHTML
         return x

    })}}


createBtn(calcBtns)





// const btn = buttonContainer.querySelectorAll('button')      
// console.log(btn)

// function click(){

//     for (let i=0; i<calcBtns.length; i++){

//     btn.addEventListener('click', ()=>{

//         if (calcBtns[i]!=="Clear" && calcBtns[i]!=="="){

//             display.textContent = display.textContent + btn.textContent
    

//     }
// })}}

// click()

// btn.forEach(button)addEventListener('click', ()=>{

//     if (calcBtns[i]!=="Clear" && calcBtns[i]!=="="){

//         display.textContent = display.textContent + btn.textContent


//     }})

// let num1=0
// let num2=1
// let num3;

// for (i=1; i<parseInt(n); i++){
//     num3 = num1+num2;
//     num1 = num2;
//     num2=num3;
// }

// return num3

// buttonContainer.classList.add('btnForDisplay');




// const btnNum1 = document.createElement('button')
// btnNum1.textContent = "1"
// buttonContainer.appendChild(btnNum1)


// const btnNum2 = document.createElement('button')
// btnNum2.textContent = "2"
// buttonContainer.appendChild(btnNum2)

// const btnNum3 = document.createElement('button')
// btnNum3.textContent = "3"
// buttonContainer.appendChild(btnNum3)

// const btnNum4 = document.createElement('button')
// btnNum4.textContent = "4"
// buttonContainer.appendChild(btnNum4)

// const btnNum5 = document.createElement('button')
// btnNum5.textContent = "5"
// buttonContainer.appendChild(btnNum5)

// const btnNum6 = document.createElement('button')
// btnNum6.textContent = "6"
// buttonContainer.appendChild(btnNum6)

// const btnNum7 = document.createElement('button')
// btnNum7.textContent = "7"
// buttonContainer.appendChild(btnNum7)

// const btnNum8 = document.createElement('button')
// btnNum8.textContent = "8"
// buttonContainer.appendChild(btnNum8)

// const btnNum9 = document.createElement('button')
// btnNum9.textContent = "9"
// buttonContainer.appendChild(btnNum9)

// const btnNum0 = document.createElement('button')
// btnNum0.textContent = "0"
// buttonContainer.appendChild(btnNum0)

// const btnAdd = document.createElement('button')
// btnAdd.textContent = "+"
// buttonContainer.appendChild(btnAdd)

// const btnSubtract = document.createElement('button')
// btnSubtract.textContent = "-"
// buttonContainer.appendChild(btnSubtract)

// const btnMultiply = document.createElement('button')
// btnMultiply.textContent = "x"
// buttonContainer.appendChild(btnMultiply)

// const btnDivide = document.createElement('button')
// btnDivide.textContent = "/"
// buttonContainer.appendChild(btnDivide)

// const btnEquals = document.createElement('button')
// btnEquals.textContent = "="
// buttonContainer.appendChild(btnEquals)

// const btnClear = document.createElement('button')
// btnClear.textContent = "Clear"
// buttonContainer.appendChild(btnClear)


// btnNum1.addEventListener('click',()=>{

//     document.getElementById('display').textContent = document.getElementById('display').textContent + btnNum1.textContent
// })

// let children = buttonContainer.children;



// btnNum1.addEventListener('click' () => 


// }
// )
