//Basic JavaScript: Decrement a Number with JavaScriptPassed
//You can easily decrement or decrease a variable by one with the -- operator.

i--;

//is the equivalent of

i = i - 1;

//Note
//The entire line becomes i--;, eliminating the need for the equal sign.

//Change the code to use the -- operator on myVar.
var myVar = 11;

// Only change code below this line
myVar--;


function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}
var result = sum([3],2);
console.log(result);



