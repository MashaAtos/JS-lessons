1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function checkNumber(number){
    if (number % 2 == 0)
        return "even";
    else
        return "odd"
}
checkNumber()

OR

function checkNumber(number) {
    let numberIs = (number % 2 == 0) ? 'even' : 'odd'
    return numberIs
}
checkNumber()


2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

function checkDivisibleNumber(a, b) {
    if (a % b  == 0 || b % a == 0)
        return 1
    else
        return 0
}
checkDivisibleNumber()


3. Given two variables, which are the angles of a triangle. Find the third angle of the
triangle. (Sum of the angles of a triangle equals 180 degrees).

function findThirdAngle(a, b) {
    let triangle = 180
    let sum = a + b
    let thirdAngle = triangle - sum
        return thirdAngle;
}
findThirdAngle(10, 29)

4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

function getNumber(n){
	let factor = Math.pow(10, (n + '').length);
	let nn = n * factor +n;
	let nnn = nn * factor +n;
	return n + nn + nnn;
}

5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.

function replaceDigit(num){
  let str = num.toString();     
  let lastDigit = str.substring(str.length - 1);  
  let remove = lastDigit + str.substring(0, str.length - 1);
    return remove;
}
replaceDigit(234)

6. Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).

function avg(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function getValue(x) 
{
  if (x % 3 == 0 && x % 5 == 0 && x % 7 == 0) {
    return x + ' is a multiple of 3, 5 or 7.';
      } 
  else if (x % 3 == 0 && x % 5 == 0){
    return x + ' is a multiple of 3 and 5.';
    }
 else if (x % 3 == 0 && x % 7 == 0){
    return num + ' is a multiple of 3 and 7.'
    } 
else if (x % 3 == 0 && x % 7 == 0){
    return x + ' is a multiple of 3 and 7.'
    } 
else if (x % 5 == 0 && x % 7 == 0){
    return x + ' is a multiple of 5 and 7.'
    } 
else if (x % 3 == 0){
    return x + ' is a multiple of 3.'
    } 
else if (x % 5 == 0){
    return x + ' is a multiple of 5'
    } 
else if (x % 5 == 0){
    return x + ' is a multiple of 7'
    } 
else {
    return x + ' is not a multiple of 3, 5 or 7.';
      }
}

8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
years and more ). Also check that age in months is between 1 and 12.

function getAgeGroup(age, period) {
    
    switch(period) {
        case 'month':
        case 'months':
            if(age >= 1 && age <= 12) return 'baby';
            throw 'Invalid age';
        case 'year':    
        case 'years':
            if(age >= 1 && age <= 2) return 'toddler';
            if(age >= 3 && age <= 12) return 'child';
            if(age >= 13 && age <= 12) return 'teenager';
            if(age >= 18) return 'adult';
            throw 'Invalid age';
    }
}

9. Given three numbers. Sort them by the ascending order.

function sortNumbers(x, y, z){
    let points = [x, y, z]

    let sorting = points.sort(function(a,b){return a-b});
    return sorting;
}

10. Percentage marks obtained by a student in three exams are to be entered to a
computer. An indication of Pass or Fail is given out after the three marks are entered.
The criteria for passing are as follows:
a. A student passes if all three examinations are passed.
b. Additionally a student may pass if only one subject is failed but the overall
average is greater than or equal to 50.
The pass mark for an individual subject is 40.

function passExam(a, b, c){
   let passMark = 40;
   let avg = (a + b + c) / 3;

    if(a >= 40 && b >= 40 && c >= 40){
        return "Passed"
    }
    
    else if(((a && b) >= passMark && (avg >= 50)) || ((a && c) >= passMark && (avg >= 50)) || ((b && c) >= passMark && (avg >= 50))){
        return "Passed"
    }

    else {
        return "Not Passed"
    }
 
}

11. Find the sign of product of three numbers without multiplication operator. Display the
specified sign.

function getSign(a, b, c) {
    if(a === 0 || b === 0 || c === 0) return 'unsigned';
    
    let negativeCount = 0;
    if(a < 0) negativeCount++;
    if(b < 0) negativeCount++;
    if(c < 0) negativeCount++;
    
    return negativeCount % 2 === 0 ? '+' : '-';
}

12. Input three numbers a, b, c respectively, where a is a non zero number and write a
program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).

function getEquation(a, b, c) {
    if(a === 0 || b === 0 || c === 0) return 'Enter valid numbers';
    let discr = b * b - 4 * a * c;
    if(discr < 0) return 'Solution does not exist';
    
    if(discr === 0) return `Solution is ${-b / 2 * a}`;
    
    let x1 = (-b - Math.sqrt(discr)) / (2 * a);
    let x2 = (-b + Math.sqrt(discr)) / (2 * a);
    
    return `Solutions are ${x1} and ${x2}`;
}

15. Enter a number. Reverse its first and last digits. Print the new number.

function reverseNum(num) {
  let rev = num
        .toString()
        .split('')
        .reverse()
        .join('')
   return rev;           
}

18. (***) Enter a number. Find the difference between its biggest and smallest digits.

function getDifference(number) {
  let digits = number.toString().split('').map(n => +n)
  let max = Math.max(...digits);  
  let min = Math.min(...digits);
  let dif = max - min;
  return dif;
}
