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

// function cutfruit(fruit) {
//     return 4 * fruit;
// }
// function fruits(apple, orange) {
//     const applepieces = cutfruit(apple);
//     const orangepieces = cutfruit(orange);
//     const juic = (`i have ${applepieces} apple and ${orangepieces} orange.`);
//     return juic;
//    }

// console.log(fruits(2, 2));

/*
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

// const calage = function (birthyear, firstname) {
//     return 2022 - birthyear;
// }
// const yearofretirement = function (birthyear, firstname) {
//     const age = calage(birthyear);
//     const retired = 65 - age;
//     const ages = (`${firstname} retires in ${retired} year. `);
//     return ages;
// }
// console.log(yearofretirement(1998, 'jeevan'));



/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //test1
// const scoreDolpins = calcAverage(55, 56, 20);
// const avgKoalas = calcAverage(55, 56, 20);
// concole.log(scoreDolpins, avgKoalas);

// const checkWinner = function (avgDolpins, avgKoalas) {
//     //console.log(avgDolpins,avgKoalas);
//     if (avgDolpins >= avgKoalas) {
//         console.log(`The Dolphins wins the trofy...${avgDolpins} vs. ${avgKoalas}.`);
//     } else if (avgKoalas >= avgDolpins) {
//         console.log(`The Koalas wines the trofy...${avgDolpins} vs ${avgKoalas}`);
//     } else if (avgDolpins === avgKoalas) {
//         console.log(`match drowas...${avgDolpins} vs ${avgKoalas}`);
//     }
// }
// checkWinner(scoreDolpins, avgKoalas);
// checkWinner(576, 111);





// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(avgDolphins, avgKoalas);

// checkWinner(576, 111);


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(5, 6, 7);

// let avgDolphins = calcAverage(25, 45, 62);
// let avgKoalas = calcAverage(45, 62, 23);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas) {
//         console.log(`the Dolphines winse`);
//     } else if (avgKoalas >= avgDolphins) {
//         console.log(`the koalas wines`);
//     }

// }

// console.log(avgDolphins, avgKoalas);
