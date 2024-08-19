//! What is object in javascript ?

//? An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

const list = "friend - list";

const mySelf = {
  //#  every key(property) of javascript must hold value inisde object. that's value could be any data...
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
// console.log(mySelf.returnCrush("javascript"));

//* create a varible
const name = "yusuf";
const age = [
  {
    myAge: 27,
    nazAge: 25,
  },
];
const currentAddress = {
  thana: "kotoali",
  district: "ctg",
  river: {
    fRev: "podma",
    sRev: "megna",
  },
};
const homeDistrict = "noakhali";

//* addEverything in obj
const myBio = {
  //// every varible hold value inside it
  name,
  age,
  currentAddress,
  homeDistrict,
};

// console.log(myBio);

//* destructering obj
// const pickAge = myBio.age[0];
// const {myAge,nazAge} = pickAge
// const {
//   currentAddress: { thana,district },
// } = myBio;
// const {
//   currentAddress : {river : { fRev :p , sRev:m } }
// } = myBio

//? console those thing
// console.log(myBio);
// console.log(thana, district);
// console.log(myAge, nazAge);
// console.log(p, m);

//!==============
//? this func
//!==============

//! What is this ?
//? "this" keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

//? In gloval this === window

//! https://www.freecodecamp.org/news/the-this-keyword-in-javascript/

function showThis() {
  console.log(this);
}
// showThis() // --> window

function outsideShow() {
  function insideShow() {
    console.log(this);
  }
  insideShow();
}

//* same this is happen in here
// outsideShow(); // --> window

//!==============
//? this in object
//!==============

//? What happen when we create showThis() func inside a obj.

const johnObj = {
  name: "jhon",
  age: 35,
  address: "san fransisco",
  friend: ["bob", "anna", "susi"],

  //* same thing
  showThis: function () {
    console.log(this);
  },
};

// johnObj.showThis(); --> johnObj

const yusuf = {
  fname: "Yusuf",
  lname: "Shahin",
  fullName: function () {
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

// console.log(returnObj("snigdha", 17, 2024));
const snigdha = returnObj("snigdha", 17, 2024);

let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log("hello world inside");
  },
};

//* add property outside of object
// user.sayHi = function () {
//   console.log("hello world outside");
// };

// user.sayHi();

//!==============
//? factory function
//!==============

//?  In JavaScript, a factory function is a function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.

//* inside the parameter of func we set the key property, when we invoke the func we set the value of those key...
function progLang(language, library, framwork) {
  return {
    // language: language,
    // library: library,
    // framwork: framwork,

    //# same thing work...
    language,
    library,
    framwork,
    //# we dont use fullstack func outside of it
    fullStack: function () {
      console.log(
        ` ${this.library} is the library of ${this.language} and ${this.framwork} its framwork`
      );
    },
  };
}

// console.log(progLang("javascript", "react", "next"));

//* store the value of func insid a varible :-
const javascript = progLang("javascript", "react", "next");
// console.log(javascript);

//* same thing write in two way :-
//# if store func inside a obj :-
// javascript.fullStack();
//# if dont store the func inside a obj :-
// progLang("javascript", "react", "next").fullStack();

//!==============
//? constructor function
//!==============

//? A constructor function is a special type of function in programming that is used to create objects. It is typically used in object-oriented programming languages like JavaScript. The purpose of a constructor function is to set the initial values or properties of an object when it is created.

//* Same thing using constructer func

//! https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/

//* In conster function we dont return a object and always use pascal case when create the func
function ProgLang(language, framwork) {
  this.lang = language;
  this.fram = framwork;
  this.fullStack = function () {
    console.log(`${this.fram} is the framwork of ${this.lang}`);
  };
  //# for new key word this always point to the object
  // console.log(this);
}

//? in constructer we must use new keyword... what is new key word
//! https://www.freecodecamp.org/news/demystifying-javascripts-new-keyword-874df126184c/

//// "new" keyword is responsible for invoking the constructor and creating a unique instance every single time. It also takecare of "this" keyword. because except obj, we previously see, "this" keyword always refers the window .

//? "new" keyword - create a new object --> point to it --> omit return.
// console.log(ProgLang);
//* store the value of func insid a varible same as "factory-func" :-
const python = new ProgLang("Python", "Django");
//# in the prototype we find the constructor
// console.log(python);

// python.fullStack();

// const php = new ProgLang("PHP", "Laravle");
// console.log(php);
// php.fullStack();

//!==============
//? constructor property
//!==============
// https://javascript.info/constructor-new

//? All Objects in Javascript have access to constructor property that returns a constructor function that created it.
//? built in constructor functions
//? arrays and functions are objects in javascript

//* annonymous function aslo use to create a constructor function :-
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love C++`
    );
  };
};
//// Note :- Arrow functions in JavaScript are not suitable for use as constructor functions. This is because arrow functions do not have their own this context, which is essential for a constructor function.

const jonny = new Person("jonny", "sanders");

//# everything add in constructor
// console.log(jonny.constructor);
// jonny.fullName();

//* different constructer property
const bobo = {};
// console.log(bobo.constructor);
// const lists = [];
// console.log(lists.constructor);
// const sayHi = function () {};
// console.log(sayHi.constructor);
//# The constructor property returns the function that created the Object prototype.

//* same thing on different way :-
// const susy = new jonny.constructor("susy", "carpenter");
// susy.fullName();

//!==============
//? Prototypal Inheritance Model
//!==============

/*
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;

  //# pest this deposit into  -->  Account.prototype.deposit
  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  // };
}

const dohn = new Account("dohn", 200);
const boby = new Account("boby", 0);

//* setup own prototype :-
console.log(Account.prototype);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(dohn);
//- console.log(dohn.bank);
//- console.log(boby);

//* deposide is a method
dohn.deposit(300);
boby.deposit(1000);

//!==============
//? Property Lookup
//!==============

/*
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const steve = new Account("steve", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(steve.bank);
console.log(bob);
console.log({});
console.log([]);

//!==============
//? class in js
//!==============

// class Account {}

// // console.log(Account);

// const myAcc = new Account();
// console.log(myAcc);
