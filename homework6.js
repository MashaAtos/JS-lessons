1. Given an array. Determine whether it consists only from unique elements or not.

 function hasDuplicates(arr) {
   if (new Set(arr).size !== arr.length){
     return "Duplicated elements in list"
 }
     return "All elements are unique"
}

2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
