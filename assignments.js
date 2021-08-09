/* LECTURE: VALUES AND VARIABLES: */

// let country = 'Brazil';
// let continent = 'South America';
// let population = '210.000.000';

// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: DATA TYPES:

// let country = 'Brazil';
// let population = '210.000.000';
// let isIsland = false;
// let language;


// console.log(country);
// console.log(isIsland);
// console.log(population);
// console.log(language);

//LECTURE: LET, CONST, AND VAR:

// const country = 'Brazil';
// let population = '210.000.000';
// const isIsland = false;
// const language = 'portuguese'
// population = '220.000.000'


// console.log(country);
// console.log(isIsland);
// console.log(population);
// console.log(language);

//LECTURE:BASIC OPERATORS:

// const country = 'Brazil';
// let population = (20);
// const isIsland = false;
// const language = 'english'
// let populationFinland = (33);
// let description = country + ' is in ' + continent + ', and its ' + population + ' milion people speak ' + language

// console.log(country);
// console.log(isIsland);
// console.log(population > populationFinland);
// console.log(language);
// console.log(description);


//LECTURE: STRINGS AND TEMPLATE LITERALS:

// let description = (`${country} is in ${continent} , and its ${population} milion people speak ${language}`)
// console.log(description);

//LECTURE: IF / ELSE STATEMENTS

// if (population > 33) {
//     console.log("Brazil's population is above average")
// } else {
//     let belowAverage = 33 - 20
//     console.log(`Brazil's population is ${belowAverage} below average `)
// }

//LECTURE: EQUALITY OPERATORS:

// const numNeighbours = Number(prompt('How many neighbours countries does your country have? '))

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No borders')
// }

//LECTURE: LOGICAL OPERATORS:

// if (language === 'english' && population < 50 && !isIsland); {
//     console.log(`${country} is the right country :(`)
// }

//LECTURE: SWITCH STATEMENT:

// const language = prompt('Insert one language');

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!')
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers!')
//         break;
//     case 'english':
//         console.log('3rd place')
//         break;
//     case 'hindi':
//         console.log('Number 4')
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
// }


//LECTURE: THE CONDITIONAL (TERNARY) OPERATOR:

// const population = prompt('Insert the population');
// const country = prompt('Insert the country');
// const resultAbove = population > 33 ? console.log(` ${country} population is above average`) : console.log(`${country} population is below average`)
