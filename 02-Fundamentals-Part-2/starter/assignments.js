'use strict';
/*
function describeCountry (country, population, capitalCity){
    const aboutCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return aboutCountry;
}

const myCountry = describeCountry ('Kyrgyzstan', 7, 'Bishkek');
console.log(myCountry);

const myCountry2 = describeCountry ('Poland', 37, 'Warsaw');
console.log(myCountry2);

const myCountry3 = describeCountry ('Germany', 45, 'Berlin');
console.log(myCountry3);

*/

/*
// Function Declarations 
function percentageOfWorld1 (population){
    return (population / 7900) * 100;
}
const percentKyrgyz = percentageOfWorld1(7);
console.log(percentKyrgyz);

//Function Expressions
const percentageOfWorld2 = function (population){
    return (population / 7900) * 100;
}
const percPortugal = percentageOfWorld2(1441);
console.log(percPortugal);

*/

/*
// Arrow function
const percentageOfWorld3 = population => {
    return (population / 7900) * 100;
}
console.log(percentageOfWorld3(7));

*/

/*
// Functions calling other functions
function percentageOfWorld1 (population){
    return (population / 7900) * 100;
}
const percentKyrgyz = percentageOfWorld1(7);
console.log(percentKyrgyz);


function describePopulation(country, population){
    const percentageOfGiven = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percentageOfGiven}% of the world`;

}
console.log(describePopulation('China', 1441));

*/


/*
// Coding challenge #1



const calcAverage = (a ,b ,c) => (a+b+c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

*/