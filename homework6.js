1. Given an array. Determine whether it consists only from unique elements or not.

 function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length ? "Duplicated elements in list" : "Unique";
}

2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.let arr = [1,2,3,4,5,6];
let sqr = arr.map(function(value){
  return Math.pow(value,2);
})

let sum = sqr.filter(i => i % 2 == 0).reduce((a,b) => a += b);
console.log(sum)

3. Check whether string is palindrome, or not.

function isPalindrome(text) {
  let lower = text.toLowerCase();
    return lower == lower.split("").reverse().join("") ? `${lower} is palindrome` : `${lower} is not palindrome`;
}

4. Given a word and a list of possible anagrams, select the correct sublist.

function anagrams(word, array){
 let addMatchingWords = [];
 let splitWordAlph = word.split('').sort().join('');
    for(let i of array){
      let arrAlph = i.split('').sort().join('');
      if(splitWordAlph == arrAlph)
        addMatchingWords.push(i)
    }
  return addMatchingWords;
}

anagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
