'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');


//function

function logger() {
    console.log('my name is jeevan');
}

logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log('apples,oranges');
    const juice = `jucice with ${apples} apple and ${oranges} oranges`;
    return juice;
}

const drink = fruitProcessor(5, 0);
console.log(drink);

*/


// function fruitjuice(mangoo, orange) {
//     console.log(mangoo, orange);
//     const juice = (`we have ${mangoo} mangoo and ${orange} orange`);
//     return juice;
// }

// const dri = fruitjuice(5, 1);
// console.log(dri);


// function cars(scoda, maruti) {
//     console.log(scoda, maruti);
//     const car = (`there are ${scoda} scoda and ${maruti} maruti`);
//     return car;
// }
// const ok = cars(4, 5);
// console.log(ok);

//function decleration
function Age1(birthyear) {
    return 2022 - birthyear;
}
const age1 = Age1(1998);
// console.log(age1);


//function expression
const Age2 = function (birthyear) {
    return 2022 - birthyear;
}
const age2 = Age2(1997);
console.log(age1, age2);