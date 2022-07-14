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



/*
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


//arrow functions


const Age3 = birthyear => 2022 - birthyear;
const age3 = Age3(1998);
console.log(age3);


const yearr = (bi, fn) => {
    const age = 2022 - bi;
    const re = 65 - age;
    return `${fn} retures in ${re} years`;
}
console.log(yearr(1998, "jee"));



//Function Calling Other
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    //function fruitProcessor cutFruitPieces(fruit: any): Number
    const applepieces = cutFruitPieces(apple);
    const orangepices = cutFruitPieces(orange);

    //function fruitProcessor(apple, orange) {
    const juice = `juces with ${applepieces} apple and ${orangepices} orange.`;
    return juice;
}
console.log(fruitProcessor(2, 6));



const calAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsuntilretirement = function (birthyear, firstname) {
    const age = calAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired`);
        return -1;
    }
}
console.log(yearsuntilretirement(1991, 'john'));
console.log(yearsuntilretirement(1970, 'kevin'));

*/


// const fruit = function (apple, orange) {
//     return fruit;
// }
// function fruits(apple, orange) {
//     const juc = console.log(`${apple} apples and ${orange} orange`);
//     return juc;
// }
// console.log(fruits(5, 4));






// function cutfruits(fruit) {
//     return fruit * 4;
// }

// const fruites = function (apple, orange) {
//     const applepieces = cutfruits(apple);
//     const orangepieces = cutfruits(orange);
//     console.log(`we have ${applepieces} apples and ${orangepieces} orange`);
// }
// console.log(fruites(5, 6));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//     //function fruitProcessor cutFruitPieces(fruit: any): Number
//     const applepieces = cutFruitPieces(apple);
//     const orangepices = cutFruitPieces(orange);

//     //function fruitProcessor(apple, orange) {
//     const juice = `juces with ${applepieces} apple and ${orangepices} orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 6));

function cutfruit(fruit) {
    return 4 * fruit;
}
function fruits(apple, orange) {
    const applepieces = cutfruit(apple);
    const orangepieces = cutfruit(orange);
    const juic = (`i have ${applepieces} apple and ${orangepieces} orange.`);
    return juic;
}
console.log(fruits(2, 2));
