1. Write a recursive function to determine whether all digits of the number are odd or not.

function getEvenNumber(num) {
  if (num == 0) return "Number is even";
  else if (num == 1) return "Number is odd";
  else return getEvenNumber(num - 2);
}

2. Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1)․

function getPositiveMinimum(a, b) {
  if(a >=0 && b >= 0) return Math.min(a, b);
  if(a < 0 && b < 0) return -1;
  if(a < 0) return b;
  return a;
}

function getMinimum(arr) {
  if (arr.length < 2) {
    return arr[0];
  }
  
  let shiftedValue = arr.shift();
  let calledValue = getMinimum(arr);
  return getPositiveMinimum(shiftedValue, calledValue);
}
