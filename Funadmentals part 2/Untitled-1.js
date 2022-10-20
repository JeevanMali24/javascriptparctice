//let js = 'amazing';
/*
let firstNAme = "jeevan";
console.log(firstNAme);

console.log(typeof firstNAme);
console.log(typeof js);

let year;
console.log(year);

let yearr = 22;
console.log(typeof yearr);
console.log(year);



const age = 18
const IsOldEnough = age >= 18;

if (IsOldEnough) {
    console.log('can drive a car');
} else {
    console.log('can drive a bycickle')
}




const massmark = 95;
const hightmark = 1.2;
const massjohn = 85;
const hightjohn = 1.7;


const BMImark = massmark / hightmark ** 2;
const BMIjohn = massjohn / hightjohn ** 2;
higestBMI = BMIjohn > BMImark;
console.log(BMIjohn, BMImark, higestBMI);

if (BMIjohn > BMImark) {
    console.log('John has higest BMI')
}
else {
    console.log('Mark has higest BMI')
}

console.log(`Mark's BMI ${BMImark} is higher than John's ${BMIjohn}!`)
*/

//function
//it is a pice of code which diclear a valuea geain and again.
/*
function logger() {
    console.log('my name is jeevan ')
}
*/
///calling /runing / invoking
/*
logger();
logger();
logger();

function fruitprocesser(apples, oranges) {
    console.log(apples, oranges);
    const juice = `we have ${apples} apples and ${oranges} oranges`
    return juice
}

const fruit = fruitprocesser(5, 0);
console.log(fruit);

//function decleration
function Arge1(birthyear) {
    return 2023 - birthyear
}
const age1 = Arge1(1991);
console.log(age1)

//function explerssion

function Arge2(birthyear) {
    return 2033 - birthyear;
}
const age2 = Arge2(2019);
console.log(age2);


//Arroe function

const Arge3 = birthyear => 2037 - birthyear;
const age3 = Arge3(1019);
console.log(age3);





const retirment = Yearofretirment => 2032 - Yearofretirment;
const year = retirment(2022);
console.log(year);


const yerasuntilretirment = (birthyearr, firstname) => {
    const age = 2037 - birthyearr;
    const retirment = 65 - age;
    //return retirment;
    return `${firstname}retirs ${retirment}in year `
    const a = { jkf: "dfndkj" };
}
console.log(yerasuntilretirment(1998, 'jeevan'));

const yerasuntilretirmentt = birthyearrr => {
    const agee = 2037 - birthyearrr
    const retirmentt = 65 - agee
    return retirmentt;
}
console.log(yerasuntilretirmentt(1998))



const Yearofretir = (birthyear) => {
    // console.log(birthyear)
    const age = 2037 - birthyear;
    const retirme = 65 - age;
    return retirme;
}
console.log(Yearofretir(1999))

*/

/*
/////Calling function

function fruitcutter(fruit) {
    return fruit * 4;
}
function fruitprosser(apples, oranges) {
    console.log(apples, oranges)
    const applepisses = fruitcutter(apples)
    const orangepicesses = fruitcutter(oranges)

    const fruit = `We have ${applepisses} apples and ${orangepicesses} oranges`
    return fruit;
}
console.log(fruitprosser(5, 4))

*/

//array
/*
const friend1 = 'rohan';
const friend2 = 'rohit';
const friend3 = 'sham';

const friend = ['rohan', 'rohit', 'sham'];
console.log(friend)

const year = new Array(1991, 1992, 1993, 1994)
console.log(year)

console.log(friend[0])
console.log(friend[2])


console.log(friend.length)
console.log(friend.length - 1)

friend[2] = 'jay'
console.log(friend)
*/

///coding challenge.
/*
const calcaverage = (a, b, c) => (a, b, c) / 3;

const scoreDolphine = calcaverage(5, 4, 6);
const scoreKoalas = calcaverage(4, 8, 8);

const checkWinner = function (avgDolphine, avgKoalas) {
    if (avgDolphine = 2 * avgKoalas) {
        console.log("win dolphine");

    }
    else if (avgKoalas = 2 * avgDolphine) {
        console.log("win Koalas");
    }
    else {
        console.log("no one win");
    }
}
checkWinner(scoreDolphine, scoreKoalas);
*/

/*
const calAge = function (birthyear) {
    return 2022 - birthyear
}

const year = [2016, 2015, 2014, 2013];
//console.log(calAge(year));
const age = calAge(year[2]);
const age2 = calAge(year[year.length - 1])

const age1 = calAge(year[1], calAge(year[year.length - 1]));

console.log(age, age1, age2);



const firstName = 'jeevan';
const jeevan = [firstName, 'mali', 2022 - 1998, 'student', 'friend'];
console.log(jeevan)

*/
/*
const caltip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [caltip(bill[0]), caltip(bill[1]), caltip(bill[2])]

const totalbill = bill + tip;

console.log(bill, tip);
console.log(totalbill);
*/

//dot Notation
/*
const jeevan = {
    firstName: 'Jeevan',
    lastName: 'mali',
    age: 2022 - 1998,
    job: 'student',
    firends: ['sourabh', 'shubham', 'sagar']
}
console.log(jeevan);

console.log(jeevan.firstName);
console.log(jeevan['firstName']);

const NameKey = 'Name';
console.log(jeevan['first' + NameKey]);
console.log(jeevan['last' + NameKey]);

//Bracket Notation

const intrest = prompt('what do you want to know about jeevan ');
console.log(jeevan[intrest]);

if (jeevan[intrest]) {
    console.log('what do you want to know about jeevan ')
} else {
    console.log('Plese dont enter wrong information')
}
console.log(intrest);

console.log(`${jeevan.firstName} has ${jeevan.firends.length} and his best friend is ${jeevan.firends[2]}`);

*/
/*
const john = {
    FiestName: 'jeevan',
    lastName: 'mali',
    age: 1998,
    job: 'student',
    friends: []
    
    const: function calAge() {

    }
}*/
/*
const mark = {
    fullName: 'Mark Miller',
    markweght: 78,
    markhight: 1.69,
    calaBMI: function () {
        //   console.log(this)
        this.bmi = this.markweght / this.markhight ** 2;
        return this.bmi;
    }
};

const john = {
    fillName: 'John Smith',
    johnweight: 92,
    johnhight: 1.95,
    calaBMI: function () {
        this.bmi = this.johnweight / this.johnhight ** 2;
        return this.bmi;
    }
}
console.log(mark.bmi, john.bmi);
console.log(mark)
*/
// var a = 1;
// for (var a = 1; a <= 10; a++) {
//   console.log(`hellow${a}`);
//   if (a == 3) {
//     // console.log(`hellow ${a}`)
//     break;
//   }
// }
//console.log(`hello ${a}`)
/*
let f = 45;
console.log(f);
*/

function age(birthyear) {
  const age1 = 2022 - birthyear;
  return age1;
}

console.log(age(1998));

const age2 = (birthyear) => 2022 - birthyear;
console.log(age(1997));
