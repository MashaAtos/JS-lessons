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
