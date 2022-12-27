/*
let myRole = "Salesforce Developer";
console.log(myRole);
// Data types
let goingToParty = true;
console.log(goingToParty);
console.log(typeof true);
goingToParty = 'Yes';
console.log(typeof goingToParty);

let year = 1997;
console.log(year);

// Let: Value can be changed,  Const: Value never changing,  Var

const birthYear = 1997;
console.log(birthYear);

// Operators
const now = 2022;
const ageIslambek = now - 1997; 
const ageAizirek = now - 2003;
console.log(ageIslambek, ageAizirek);
console.log(ageIslambek - ageAizirek);
console.log(ageIslambek*2 , ageAizirek/2);

const name = 'Islambek';
const lastName = 'Baizhigitov';
console.log(name + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10;  // x = x + 10 = 25
x *= 4; //  x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators 
console.log(ageAizirek < ageIslambek);

const isFullAge = ageAizirek >= 18;

let f, y;
f= y = 25-10-5; // f = y = 10, f = 10
console.log(f,y);

const averageAge = (ageAizirek + ageIslambek) / 2;
console.log (ageAizirek, ageIslambek , averageAge);
*/

////////////////////////////////////
// Coding Challenge #1,2 

/*
let namePersonOne = 'Mark';
let namePersonTwo = `John`;
let weightOfMark = 95;
let heightOfMark = 1.88;
let BMIOfMark = weightOfMark / heightOfMark ** 2 ;
console.log(BMIOfMark);

let weightOfJohn = 85;
let heightOfJohn = 1.76;
let BMIOfJohn = weightOfJohn / heightOfJohn ** 2;
console.log(BMIOfJohn);

let highestBMI;
if (BMIOfJohn < BMIOfMark){
    highestBMI = `${namePersonOne}'s BMI (${BMIOfMark}) is higher than ${namePersonTwo}`;
} else {
    highestBMI = `${namePersonTwo}'s BMI (${BMIOfJohn}) is higher than ${namePersonOne}`;
}
console.log(highestBMI);
*/

/*
// Coding Challenge #3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins is the winner!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log('Koalas is the winner!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ){
    console.log('The game is DRAW');
} else {
    console.log('No one wins the trophy (')
}

*/

// Coding challenge #4

const bill = 430;
const tip = bill >= 50 &&  bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}$, the tip was ${tip}$, and the total value ${bill + tip}$`);














/*
const firstName = 'Aizirek';
const job = 'mobilograph';
const birthYear = 2003;
const year = 2023;
// using backticks template literals
const aizi = `I'm ${firstName}, a ${year - birthYear} year old ${job}!;`
console.log(aizi) ;
console.log(`Yuou
sdfsd
sdf`); // multiple line template literals
*/

/*
const age = 19;
if (age >= 18){
    console.log('Aizi can start driving license)');
} else {
    const yearsLeft = 18 - age;
    console.log(`Aizi is too young. Wait another ${yearsLeft};)`);
}

*/

/*
const birthYear = 2003;

let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);   */


/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// type coertion

const testingTypeCoertion = 5+6+'4'+9-4-2;
console.log(testingTypeCoertion);

const age = 18;
if (age === 18) console.log('You just became an adult ');


const favourite = prompt ('What is your favourite number?');
console.log(Number(favourite));
*/


/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = false; //C 

console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Aizi is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/


/*
const day = 'tuesday';

switch (day){
    case 'monday': //day === 'monday'
     console.log('Plan course structure');
     console.log('Go to coding meetup');
    break;
    case 'tuesday':
     console.log('Prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
     console.log('Write code examples');
    break;
    case 'friday':
     console.log('Record videos');
    break;
    case 'saturday':
    case 'sunday':
     console.log('Enjoy the weeekend ;D');
    break;
    default:
     console.log('Not a valid day!');

}

*/

/*
const age = 25;
const drink = age >= 18 ? ' can drink energetic drink' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'energetic drink' : 'water'}`);

*/