// call - runs instantly, arguments - list of items

const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};
// john.greet();

const susan = {
  name: "susan",
  age: 21,
};

//* this will fail :-
// susan.greet();

function greet() {
  //# in here this point the window
  console.log(this);
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
}
// greet();

//* this will also fail...
// const secondGreet = john.greet;
// secondGreet();

// greet.call(john);
// greet.call(susan);

//* we also pass a object
greet.call({ name: "peter", age: 30 });

const alom = {
  name: "alom",
  age: 37,
};

//* we also pass that things :-
john.greet.call(alom);

//! =============
//? apply
//! =============
