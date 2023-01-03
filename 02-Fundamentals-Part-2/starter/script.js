'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*
 function logger() {
    console.log('My name is Islambek');
 }

// calling / running / invoking
logger();

function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
 const appleJuice = fruitProcessor(5,0);
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2, 5);
 console.log(appleOrangeJuice);

 */

/*
// Function declaration
function calcAge1(birthYear){
    return 2022 - birthYear;
}
const age1 = calcAge1 (1997);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age2);

// Arrow function
const calcAge = birthYear => 2022 - birthYear;
const age3 = calcAge(2003);
console.log(age3);

const yearsToRetirement = (birthYear, firstName) => {
    const age = 2022- birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsToRetirement (1997, 'Islambek'));

*/

/*
// Functions calling other functions
function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(8, 10));
*/

/*
const calAge = function (birthYear){
    return 2022 - birthYear;
}

const yearsToRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
   
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsToRetirement(1997,'Islambek'));

*/

// Arrays

const friend1 = 'Sam';
const friend2 = 'Bob';
const friend3 = 'Jake';
const friends = ['Sam', 'Bob', 'Jake'];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Dingo';
console.log(friends);

const y = new Array(1997, 2002, 1992, 1991);
console.log(y);
console.log(y[1]);

const firstName = 'Islambek';
const myProfile = [firstName, 'Baizhigitov', 2022 - 1997, 'developer', friends];
console.log(myProfile);

// Exercise

const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

const years = [1990,1997,1995,2019];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[2]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[2]), calcAge2(years[years.length - 1])];
console.log(ages);