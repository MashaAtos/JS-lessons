1. Given an array. Determine whether it consists only from unique elements or not.

 function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length ? "Duplicated elements in list" : "Unique";
}

2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.



3. Check whether string is palindrome, or not.

function isPalindrome(text) {
  let lower = text.toLowerCase();
    return lower == lower.split("").reverse().join("") ? `${lower} is palindrome` : `${lower} is not palindorme`;
}
