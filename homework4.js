1. Given an array. Write a recursive function that removes the first element and returns
the given array. (without using arr.unshift(),assign second element to first, third element
to second...)

let arr = [6, 78, ‘n’, 0, 1];
function removeFirstElement(array) {
  function recRemoveFirstElement(array, index) {
    if (index === array.length) {
      return [];
    }
    let arr = recRemoveFirstElement(array, index + 1);
    if (index !== 0) {
      arr = [array[index], ...arr];
    }
    return arr;
  }
  return recRemoveFirstElement(array, 0);
}
removeFirstElement(arr);

2. Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.

function swap(obj) {
  return Object.entries(obj).reduce((acc, [key,value]) => {
    if (acc[value]) {
      if(Array.isArray(acc[value])) {
          acc[value].push(key); 
       }
      else {
          acc[value] = [acc[value],key]
      }      
    } else {
      acc[value] = key
    }
    return acc;
  }, {});
}

3. function sort(list){

  let byPercent =
  list.sort((a, b) => (
    (a.readStatus === false) - (b.readStatus === false)
    || b.percent - a.percent
  ));
  return byPercent
  }
  sort(list)

7. Create constructor function which instances would be objects with already
implemented method map (like Array.map) .

function CreateUser(name, prof) {
  this.name = name;
  this.prof = prof;

  this.getProf = function() {
    return this.name + " is " + this.prof;
  };
}

let user = new CreateUser("Masha", "QE or PM");
console.log(user.getProf());
