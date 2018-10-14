exports.extractOdd = function(numberArray) {
  let extractedOdd = [];
  for(let number of numberArray) {
    if(number % 2 != 0){
      extractedOdd.push(number);
    }
  }
  return  extractedOdd;
}

exports.extractEven = function(numberArray) {
  let extractedEven = [];
  for(let number of numberArray) {
    if(number % 2 == 0){
      extractedEven.push(number);
    }
  }
  return  extractedEven;
}

exports.addNumbers = function(numberArray) {
  let sum = 0;
  for(number of numberArray) {
    sum = sum + number;
  }
  return sum;
}

exports.reverse = function(numberArray) {
  reversedArray = numberArray.reverse("");
  return reversedArray ;
}

exports.extractSecond = function(numberArray) {
  let reversedArray = [];
  for(index = 1 ; index < numberArray.length ; index += 2) {
    reversedArray.push(numberArray[index]);
  }
  return reversedArray;
}
exports.reverseFibonacci = function(length) {
  let fibonacci = [];
  let firstElement = 0;
  let secondElement = 1;
  let sum = 0;
  for(index = 0; index < length; index++) {
    sum = firstElement + secondElement;
    fibonacci[index] = firstElement;
    firstElement = secondElement;
    secondElement = sum;
  }
  return exports.reverse(fibonacci);
}
    
const sortArray = function(unsortedArray) {
  let sortedArray = [];
  for(let position = 0; position < unsortedArray.length; position++){
    sortedArray = swapElements(unsortedArray);
  }
  return sortedArray;
}

const swapElements = function(unsortedArray) {
  for(let index = 0; index < unsortedArray.length; index++) {
    if(unsortedArray[index] >unsortedArray[index + 1]) {
      let stack = unsortedArray[index];
      unsortedArray[index] = unsortedArray[index + 1];
      unsortedArray[index + 1] = stack;
    }
  }
  return unsortedArray;
}

exports.findGreatest = function(numberArray) {
  sortArray(numberArray);
  return numberArray[numberArray.length - 1];
}

exports.findLowest = function(numberArray) {
  sortArray(numberArray);
  return numberArray[0];
}

exports.average = function(numberArray) {
  return exports.addNumbers(numberArray)/numberArray.length;
}

exports.findLength = function(numberArray) {
  lengthArray = [];
  for(index = 0;index < numberArray.length;index++) {
    lengthArray[index] = numberArray[index].length;
  }
  return lengthArray;
}

exports.countEven = function(numberArray) {
  evenArray = exports.extractEven(numberArray);
  return evenArray.length;
}

exports.countOdd = function(numberArray) {
  oddArray = exports.extractOdd(numberArray);
  return oddArray.length;
}

exports.countNumbersAbove = function(numberArray,threshold) {
  let numbersAbove = [];
  for(let number of numberArray) {
    if(number > threshold){
      numbersAbove.push(number);
    }
  }
  return  numbersAbove.length;
}


exports.countNumbersBelow = function(numberArray,threshold) {
  let numbersBelow = [];
  for(let number of numberArray) {
    if(number < threshold){
      numbersBelow.push(number);
    }
  }
  return  numbersBelow.length;
}

exports.reverseArray = function(numberArray) {
  let reversedArray = [];
  for(let index = 0;index < numberArray.length;index++) {
    reversedArray[index] = numberArray[numberArray.length - 1 - index];
  }
  return reversedArray;
}

exports.findIndex = function(numberArray,number) {
  for(index in numberArray) {
    if(numberArray[index] == number) {
      return index;
    }
  }
}

