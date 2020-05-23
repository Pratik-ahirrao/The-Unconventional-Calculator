const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writetolog(
  operationIdentifier, prevResult,
  operationNumber, newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}


function clear(){
  currentResult = 0;
  outputResult(0,'');
}


addBtn.addEventListener('click', calculate.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click',calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this,'DIVIDE'));
clearBtn.addEventListener('click',clear);
 //parseInt converts string into integer
    // we can also use   currentResult + +userInput.value to do the same
    // to convert integer to string we use .toString() function
    // You saw the example with a number and a "text number" being added 3 + '3' = '33'
    // 3 * '3' = 9; 3 - '3' = 0; 3 / '3' = 1;
    // Just 3 + '3' yields '33' because here JavaScript uses the "I can combine text" 
    // mode of the + operator and generates a string instead of a number.
    // ++add returns value after the change
    // add++ returns value before the change
    // we use push() function to add an element to the array
    //JavaScript compares strings based on standard lexicographical ordering, 
     //using Unicode values.
    //That means that b is greater than a for example.
    //JavaScript always looks at the first character and only considers other 
    //characters if the first character is similar. In addition, capital characters 
    //are considered to be smaller than lowercase characters.
    // two objects stored in different variables will never be the same.
    // logical AND has higher precedence than OR.