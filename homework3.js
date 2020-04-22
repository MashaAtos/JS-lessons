1. Write a recursive function to determine whether all digits of the number are odd or not.

function getEvenNumber(num) {
  if (num == 0) return "Number is even";
  else if (num == 1) return "Number is odd";
  else return getEvenNumber(num - 2);
}

2. Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1)․

function getMinimal(arr) {

    if (arr.length < 2) {
        return arr[0];
    }
  
     let x = Math.min(arr.shift(), getMinimal(arr))
     return x;

}
getMinimal([56, -9, 87, -23, 0, -105, 55, 1,0])
