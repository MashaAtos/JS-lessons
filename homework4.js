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
