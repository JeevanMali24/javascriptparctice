/*
let js = 'amazing';
// if (js == 'amazing') alert('javascript is fun!');
(45 + 50 - 10);
console.log(45 + 50 - 10);

let firstName = 'jeevan';
console.log(firstName);

console.log(typeof firstName);
console.log(typeof js);

// let year;
// console.log(year);

let year = 23;
console.log(typeof year);
console.log(year);

let javascriptisfun = true;
console.log(javascriptisfun);
console.log(typeof javascriptisfun)

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

/*
const massmark = 78;
const hightmark = 1.69;
const massjohn = 92;
const hightjohn = 1.95;

const BMImark = massmark / massmark ** 2;
const BMTjohn = massjohn / (hightjohn * hightjohn);
const markHigherBMI = BMImark < BMTjohn;
console.log(BMImark, BMTjohn, markHigherBMI)


const massmark = 95;
const hightmark = 1.88;
const massjohn = 85;
const hightjohn = 1.76;

const BMImark = massmark / massmark ** 2;
const BMTjohn = massjohn / (hightjohn * hightjohn);
const markHigherBMI = BMImark < BMTjohn;
console.log(BMImark, BMTjohn, markHigherBMI)



//string and templet
const firstname = 'john';
const birthyear = 1998;
const job = 'developer';
const year = 2022;

const jeevan = "I'm" + "" + firstname + "" + (year - birthyear) + "" + "years old" + "" + job;
console.log(jeevan);
const jeevannew = `I am  ${firstname} ${(year - birthyear)} years old  ${job}!`;
console.log(jeevannew);


const age = 19;
const IsOldEnough = age >= 18;

if (IsOldEnough) {
    console.log('John can drive a car');
}
else {
    console.log('John cxan not drive a car');
}

//if else stetment

const age = 16;
if (age >= 18) {
    console.log('can drive');
}
else {
    const years = 18 - age;
    console.log(`can drive after ${years} years`);
}


const age = 15;
if (age >= 18) {
    console.log('can drive a car');
}
else {
    const later = 18 - age;
    console.log(`can drive car after ${later} years`)
}
*/



/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀



// const massmark = 78;
// const hightmark = 1.69;
// const massjohn = 92;
// const hightjohn = 1.95;

const massmark = 95;
const hightmark = 1.88;
const massjohn = 85;
const hightjohn = 1.76;

const BMImark = massmark / hightmark ** 2;
const BMIjohn = massjohn / (hightjohn * hightjohn);
//const markHigherBMI = BMImark < BMIjohn;
console.log(BMImark, BMIjohn);

if (BMImark > BMIjohn) {
    console.log(`Mark's BMI is ${BMImark} higher than John's! ${BMIjohn}`);
}
else {
    console.log(`John's BMI is ${BMIjohn} higher than mark's! ${BMImark}`);

}
//console.log(BMImark, BMTjohn, markHigherBMI)


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), (23));

//type coercion
console.log('i am' + 23 + 'years old');
console.log('i am' + '23' + 'years old');
console.log('23' + '5' + '5');            //it does not worl in + only
console.log(5 + 6 + 9);                   //it does not worl in + only
console.log('10' / '2');
console.log('10' - '5');
console.log('48' > '23');

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jeevan'));
console.log(Boolean(''));
console.log(Boolean());


const money = 100;
if (money) {
    console.log("Dont spend to much");
}
else {
    console.log("get a job");
}

const age = 18;
if (age == 18) {
    console.log("the age is equal ");
}
const fav = prompt("what's your favourite number");
console.log(fav);

if (fav === 23) {
    console.log('cool! 23 is a amazing');
} else if (fav === 8) {
    console.log('cool! 8 is amazing number');
} else {
    console.log('this is not 23 or 7');
}
*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('WoW, Dolphines are winers......');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('WoW, Koalas are winers......');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('the match id draw');
// }

//BONUS
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('WoW, Dolphines are winers......');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('WoW, Koalas are winers......');
} else if (scoreDolphins === scoreKoalas) {
    console.log('the match id draw');
} else {
    console.log('No one wins');
}



const days = prompt('enter days'); //prompt cam direct enter the days
console.log(days);

const day = 'days';

switch (days) {
    case 'monday':
        console.log('hello');
        break;
    case 'tuesday':
        console.log('second day');
        break;
    case 'wednesday':
        console.log('thied day');
        break;
    case "thursday":
        console.log('fourth day');
        break;
}


//conditional operation

const age = 42;
age >= 18 ? console.log('i like to drink wine') :
    console.log('i like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`); 
*/

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);