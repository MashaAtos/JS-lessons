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
