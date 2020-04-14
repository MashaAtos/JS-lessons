1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(num){
  for(let i = 2; i<num; i++)
  if(num % i == 0) return "yes";
return "no";
}


2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

function fibonacci(num) {
  if(num == 0) return 0;
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

3. Given a number n( n> 0 ). Print Fibonacci series up to n.

 function fibonacci_series(n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var ser = fibonacci_series(n - 1);
    ser.push(ser[ser.length - 1] + s[s.length - 2]);
    return ser;
  }
};

4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.

 function getRem(number) {
  let sum = 0;
  let product = 1;
  while (number !== 0) {
    let digit = number % 10;
    sum += digit;
    product *= digit;
    number = Math.floor(number / 10);
  }
  if (sum === 0) {
    console.log("Cannot calculate");
    return;
  }
  let rem = product % sum;
  if (rem === 0) {
    console.log(product / sum);
  } else {
    console.log(rem);
  }
};
