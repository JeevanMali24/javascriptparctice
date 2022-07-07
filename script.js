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
*/

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