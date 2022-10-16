"use strict";

// console.log(this);

// const calage = function (birthyear) {
//   console.log(2022 - birthyear);
//   console.log(this);
// };
// calage(1998);

// function calage(birthyear) {
//   console.log(2022 - birthyear);
//   console.log(this);
// }
// calage(1998);

// const calcage = (birthyear) => 2022 - birthyear;
// console.log(this);
// calage(1998);
/*
const jeevan = {
  Name: "jeevan",
  year: 1998,
  CalAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
jeevan.CalAge();
*/
/*
const jeevan = {
  fristName: "jeevan",
  year: 1998,
  CalAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // const jee = this;
    // const isjeevan = function () {
    //   console.log(jee);
    //   console.log(jee.year <= 1991 && jee.year <= 2000);
    // };

    const isjeevan = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 2000);
    };
    isjeevan();
  },

  greet: function () {
    console.log(this);
    console.log(`hey ${this.fristName}.`);
  },
};
jeevan.CalAge();
jeevan.greet();
*/

let lastName = "Willem";
let oldlastName = lastName;
lastName = "pettor";

console.log(lastName, oldlastName);

//copying object;

const jasika = {
  fristName: "jasika",
  lastName: "willim",
  age: 27,
  family: ["A", " B"],
};

const jasikacopy = Object.assign({}, jasika);
jasikacopy.lastName = "devis";

jasikacopy.family.push("C");

console.log("before marriage:", jasika);
console.log("after marriage", jasikacopy);
