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
let display = document.getElementsByClassName("display");

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
       console.log("Worked");

    
  });
  });
