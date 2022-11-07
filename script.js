class Calculator{                              
     //creating a class for calculator
    constructor (previousOperandText,currentOperendText){
        this.previousOperandText = previousOperandText
        this.currentOperendText = currentOperendText
        this.clear()
    }
}

clear() {                                   
     //clears the inner text
    this.previousOperand=''
    this.currentOperend = ''
    this.operation = undefined    
}

delet() {                              
     //deletes a number or an operator
   
}

appendNumber(number) {                  
     //adds a number 
     this.currentOperend = this.currentOperend.toString() + number.toString();

}

chooseOperation(operation){            
     //adds an operator
 
}

compute(){                            
      //does the operation

}   

updateDisplay(){              
      //after computing it displays the output
    this.currentOperendText.innerText = this.currentOperend;
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperendText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText,currentOperendText)  //creating an object to use the class
    
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})