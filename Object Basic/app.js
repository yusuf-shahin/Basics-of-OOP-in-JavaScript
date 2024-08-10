//! What is object in javascript ?

//? An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

const list = "friend - list";

const mySelf = {
  //#  every key(property) of javascript hold value inisde object. that's value could be any data
  name: "Yusuf Shahin",
  age: 27,
  married: false,
  greed: function (name) {
    console.log(`Hello , name is ${name}`);
  },
  tvShow(name) {
    console.log(`my favourite tvshow is ${name}`);
  },
  returnCrush: function (crush) {
    return `My present crush is ${crush}`;
  },
  job: {
    title: "developer",
    compeny: {
      name: "octarine",
      address: "khilgaon, bonosri",
    },
  },
  "friend - list": ["shakawt", "joy", "hridoy", "sabqat"],
};

// mySelf.tvShow("rick and morty");

//? Both are same in bracket notation
// console.log(mySelf[list]);
// console.log(mySelf["friend - list"]);

//? hold the value of crush :-
console.log(mySelf.returnCrush("javascript"));

//!==============
//? this in object
//!==============

const yusuf = {
  fname: "Yusuf",
  lname: "Shahin",
  fullName: function () {
    console.log(this);

    console.log("My full name is Yusuf Shahin");
  },
};

const nazmul = {
  fname: "Nazmul",
  lname: "Hasan",
  fullName: function (name) {
    console.log(`My full name is ${name}`);
  },
};

const sabqat = {
  fname: "Sabqat",
  lname: "Ahmed",
  fullName: function () {
    console.log(`My full name is ${this.fname} ${this.lname}`);
  },
};

// yusuf.fullName();
// nazmul.fullName("Nazmul Hasan");
// sabqat.fullName();

//! What is this ?
//? In gloval this === window

function showThis() {
  console.log(this);
}

//* inside showThis func we console this . when we invoke showThis() it"s refer the global
// showThis();

function outsideShow() {
  function insideShow() {
    console.log(this);
  }
  insideShow();
}

//* same this is happen in here
// outsideShow();

//? What happen when we create showThis() func inside a obj.

const john = {
  name: "jhon",
  age: 35,
  address: "san fransisco",
  friend: ["bob", "anna", "susi"],
  // showThis: showThis,

  //* same thing
  showThis: function () {
    console.log(this);
  },
};

//!==============
//? return obj inside func :-
//!==============

function returnObj(name, age, year) {
  return {
    name,
    age,
    year,
  };
}

console.log(returnObj("snigdha", 17, 2024));

//* showthis function directly indicate the obj...
// john.showThis();

let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log("hello world inside");
  },
};

// user.sayHi = function () {
//   console.log("hello world outside");
// };

// user.sayHi();

//!==============
//? factory function
//!==============

//?  In JavaScript, a factory function is a function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.

//* inside the parameter of func we set the key property, when we invoke the func we set the value of those key...
function progLang(language, library, franwork) {
  return {
    // language: language,
    // library: library,
    // franwork: franwork,

    //# same thing work...
    language,
    library,
    franwork,
    //# we dont use fullstack func outside of it
    fullStack: function () {
      console.log(
        ` ${this.library} is the library of ${this.language} and    ${this.franwork} its framwork`
      );
    },
  };
}

console.log(progLang("javascript", "react", "next"));

const javascript = progLang("javascript", "react", "next");
console.log(javascript);

javascript.fullStack();

//!==============
//? constructor function
//!==============
