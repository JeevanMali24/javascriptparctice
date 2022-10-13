"use strict";

function CalAge(birthyear) {
  const age = 2022 - birthyear;
  console.log(fristName);

  function Age() {
    const output = `${fristName}  is ${age} years old:.`;
    console.log(output);
  }

  if (birthyear >= 1981 && birthyear <= 2000) {
    const out = `your ${age} is. `;
    console.log(out);

    function add(a, b) {
      return a + b;
    }
    console.log(add(5, 5));
  }
  Age();
  return age;
}

const fristName = "jeevan"; //this is global veriable
CalAge(1998);
