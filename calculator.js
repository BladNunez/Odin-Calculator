//Add function 
function add(numOne,numTwo){
        let num = numOne + numTwo;

        return num
}

//Sub function 
function sub(numOne,numTwo){
        let num = numOne - numTwo;

        return num;
}

//Divide function
function divide(numOne,numTwo){
        if(numOne === 0 || numTwo === 0){
                console.log("Can not divide by zero!");
        }

        let num = numOne / numTwo;

        return num
}

function multiply(numOne,numTwo){
        let num = numOne * numTwo;

        return num;
}


//Operate function takes in operator and 2 numbers and performs operation
function operate(sign,numOne,numTwo){
        if(sign === '+'){
              return add(numOne,numTwo);
        } else if(sign === '-'){
                return sub(numOne,numTwo);
        } else if(sign === '*'){
                return multiply(numOne,numTwo);
        } else if(sign === '/'){
                return divide(numOne,numTwo);
        } else{
                console.log("Can not perform operation!");
        }
}



//add eventlisteners on all number buttons
let display = document.querySelector('.display');


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
        let b = button.value;

        switch(b){
                case '7':
                        display.append(7);
                        break;
                case '8':
                        display.append(8);
                        break;
                case '9':
                         display.append(9);
                         break;
                 case '4':
                        display.append(4);
                        break;
                case '5':
                        display.append(5);
                        break;
                case '6':
                        display.append(6);
                        break;
                case '1':
                        display.append(1);
                        break;
                case '2':
                        display.append(2);
                        break;
                case '3':
                        display.append(3);
                        break;
                case '0':
                        display.append(0);
                        break;
        }
  });
  });
