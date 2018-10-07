/*

var - been around since the beginning of JS
let 
const

*/

// declaring variable
var name = 'sam';
console.log(name);

name = 'Stevie McFarrley';
console.log(name);

// initializing variable - set a variable without using it
var greeting;
console.log(greeting);

greeting = 'hello yall';
console.log(greeting);

/*
Rules/Conventions of JavaScript
 - Variables can include letters, numbers, _, and $
 - cannot start a variabe with a number
 - multiword convetions
    - camelCasing
    - PascalCasing
    - underscore_casing

 */

//  let
let favoriteSport = 'basketball';
console.log(favoriteSport);
favoriteSport = 'soccor';
console.log(favoriteSport);

// const - stands for constance - meaning that it can't be changed or reassigned

const nickname= 'nubs';
console.log(nickname);

// wont work
// nickname = 'bubs';
// console.log(nickname);

// const can not be initialized, needs data
// const noValueHere;

// quirk - working with objects
const person = {
    name: "rodney rod",
    age: 32,
    height: "5'4"
}

console.log(person);

person.name = "sara";
person.age= 33;
console.log(person)

// working with arrays
const array = ['bob', 'rob','sam','tim','joe', 'ron', 'jon', 'tom', 'fin', 'ted', 'laquisha'];

console.log(array);

console.log(array[10]);

array.push('Michael Jordan');
console.log(array);