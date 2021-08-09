// VALUES E VARIABLES:

// let js = 'amazing'

// console.log(40 + 8 + 23 - 10);

// let firstName = "Leticia";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// DATA TYPES:

// BOOLEAN TYPE:
// não se coloca o true or false entre aspas!
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

//O typeof é um operador unário colocado antes de seu operando, o qual pode ser de qualquer tipo. Seu valor é uma string que especifica o tipo do operando:
//console.log(typeof true);
//console.log(typeof 23);
//console.log(typeof 'Leticia');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// // INDEFINED TYPE:
// // INDEFINIDO SIGNIFICA UM VALOR VAZIO
// let year;
// console.log(year);
// console.log(typeof year);

// // NULL TYPE:
// // É SEMELHANTE AO INDEFINED
// console.log(typeof null)

// ______________________________________________________

// TRÊS MANEIRAS DIFERENTES DE DECLARAR UMA VARIÁVEL:

// •	Usamos a palavra-chave ‘let’ para criar variáveis que podem ser mudadas depois, como fizemos anteriormente. (lição acima dessa):
// let age = 30;
// age = 31;

// •	Usamos a palavra-chave ‘const’ para declarar uma variável que não pode ser mudada. Então nesse caso dá um erro no código.
// const birthYear = 1991;
// birthYear = 1990;

// •	Não use 'var', é uma maneira antiga de declarar variáveis.
// mas ela faz basicamente o que 'let' faz
// var job = 'programmer';
// job = 'teacher'

// OPERADORES BÁSICOS:

// OPERADORES MATÉMATICOS:

// const now = 2037;
// const ageLeticia = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageLeticia, ageSarah);

// console.log(ageLeticia * 2, ageLeticia / 10, 2 ** 3);
//2**3 significa a potência, ou seja, 2 elevado a 3
//o resultados dessas operações são: 92; 4.6; 8

//para usar o sinal de + temos um exemplo juntando duas strings:
// const firstName = 'Leticia';
// const lastName = 'Almeida';
// console.log(firstName + lastName);
// aqui o resultado é LeticiaAlmeida (tudo junto)
// para ter um espaço entre eles crie uma outra string vazia! assim:
// console.log(firstName + ' ' + lastName);

// OPERADOR TYPEOF:
//O typeof é um operador unário colocado antes de seu operando, o qual pode ser de qualquer tipo. Seu valor é uma string que especifica o tipo do operando:
//console.log(typeof true);
//console.log(typeof 23);
//console.log(typeof 'Leticia');

//OPERADOR DE ATRIBUIÇÃO:

// let x = 10 + 5; //15
// x += 10; // x = x + 10 === 25 (porque pega o valor de x de cima que no caso é 15 então, 15 + 10 = 25)
// x *= 4; // x = x * 4 === 100 (porque pega o valor de x de cima que no caso é 25 então, 25 * 4 = 100))
// x++; // x = x + 1 === 101 (porque pega o valor de x de cima que no caso é 100 então, 100 + 1  = 101))
// x--; // x = x - 1 (porque pega o valor de x de cima que no caso é 101 então, 101 - 1  = 100))
// x--; // x = x - 1 (porque pega o valor de x de cima que no caso é 100 então, 100 - 1  = 99))
// console.log(x);


//OPERADORES DE COMPARAÇÃO:
//usamos o bollean:

// const now = 2037;
// const ageLeticia = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageLeticia > ageSarah); //true (porque a idade de Leticia é sim MAIOR QUE a de Sarah)
// console.log(now - 1991 > now - 2018); // ou nós podemos escrever esse código acima dessa forma!
// console.log(ageSarah >= 18); //true (porque a idade da Sarah é MAIOR OU IGUAL a 18)

//________________________________________________________________________________________

// PRECEDÊNCIA DE OPERADORES:
// A ORDEM QUE OS OPERADORES SÃO EXECUTADOS!

// const now = 2037;
// const ageLeticia = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// //EXEMPLO DE ESQUERDA PARA DIREIRA:
// console.log(25 - 10 - 5); // 10

// //EXEMPLO DE DIREITA PARA ESQUERDA:
// let x, y; //(você pode declarar 2 variáveis de uma só vez, nesse caso são duas variáveis indefinidas)
// x = y = 25 - 10 - 5;
// console.log(x, y); // 10 10

// //EXEMPLO DE MÉDIA: LEMBRE-SE DO PARÊNTESES PARA A CONTA FUNCIONAR!!!
// const averageAge = (ageLeticia + ageSarah) / 2
// console.log(ageLeticia, ageSarah, averageAge);

// ____________________________________________________________________

//STRINGS AND TEMPLATE LITERALS:

// const firstName = 'Leticia';
// const job = 'programmer';
// const birthYear = 2002;
// const year = 2021;

// //ISSO ABAIXO É UM EXEMPLO QUE FUNCIONA MAS É MUITO MAIS TRABALHOSO:
// // const leticia = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'

// //USANDO O MODELO LITERAL FICA MAIS PRÁTICO
// const leticiaNew = `I'm  ${firstName}, a ${year - birthYear} year old ${job}! `;
// console.log(leticiaNew);

// console.log(`Just a regular string...`)

// console.log(`String
// multiple
// lines`)

// _____________________________________________________________________________________

// IF / ELSE STATEMENTS:

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)
// }

// if () {

// } else {

// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century); //century 20, porque o ano é 1991, século 20

//_____________________________________________________________________________

// TYPE CONVERSION AND COERCION:

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// //TYPE COERCION:

// console.log('I am ' + 23 + ' years old');

// console.log('23' - '10' - 3)

// console.log('23' * '2');
// console.log('23' / '2');

// console.log('23' > '18');

// let n = '1' + 1; //'11
// n = n - 1; // aqui como tem um sinal de '-' ele converte a string ''11'' em um número 11, então 11-1 = 10
// console.log(n); //10

// // TRULY AND FALSY:

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Leticia'));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//     console.log("Don't spend it all :)")
// } else {
//     console.log("You should get a job!")
// }

//_________________________________________________________________

// == vs. ===

// const age = 18;
// if (age === 18); console.log("You just become an adult :) (strict)")

// if (age == 18); console.log("You just become an adult :) (loose)")

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 23) { // 23 === 23
//     console.log('Coo! 23 is an amazing number!')
// } else if (favorite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7')
// }

// if (favorite !== 23); console.log('Why not 23?')

// AND, OR, NOT:

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!')
// // } else {
// //     console.log('Someone else should drive...')
// // }

// const isTired = true; // C
// console.log(hasDriversLicense || hasGoodVision || isTired); // true
// console.log(hasDriversLicense && hasGoodVision & isTired); //true


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

//SWITCH STATEMENT:

// const day = 'monday'

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend!');
//         break;
//     default:
//         console.log('Not a valid day')
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend!');
// } else {
//     console.log('Not a valid day')
// }

//STATEMENTS AND EXPRESSIONS:

// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger'; // nesse caso o '23 is bigger já é uma expression dentro de um statement
// }

// const me = 'leticia';
// console.log(`I am ${me} and I'm ${2021 - 2002} years old.`)

//THE CONDITIONAL (TERNARY (FORMADO DE 3 UNIDADES?)) OPERATOR:

// const age = 23;
// const drink = age >= 18 ? 'coke' : 'water';
// console.log(drink)


// const age = 23;
// console.log(`I like to drink ${age >= 18 ? 'coke' : 'water'}`);