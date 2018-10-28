const person = {
    firstName: 'Zaffer', 
    lastName: 'Basith', 
    age: 13,
    email: 'zuffer@gmail.com',
    hobbies: ['coding', 'family time', 'sugar'],
    address: {
        city: 'Chitown',
        state: 'health',
    },
    // BirthYear: function() {return 1981}
    BirthYear: () => {return 1981}
}

// curly braces define this variable as an Object Literal
// inside the curly braces we put 'Key: Value' pairs that are seperated by commas, 
// functions stored inside objects are called methods

let val;
val = person;

// get specific value
val = person.firstName;
    // another way of doing the same thing, but not recommend
    val = person['lastName'];

val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
    // another way of doing this, but not recommended
    val = person.address['state'];

val = person.BirthYear();

// in objects literals, we can access other properties
// THIS keyword
const person2 = {
    age: 32,
    // BirthYear: () => {return 2018 - this.age;} - didnt work
    getBirthYear: function() {return 2018 - this.age;}

}

val = person2.getBirthYear();



// Arrays made of objects
const people = [
    {name: 'Bob', age:54},
    {name: 'Greg', age:14},
    {name: 'Larry', age:24},
    {name: 'Joe', age:23},
    {name: 'John', age:16},
    {name: 'Steve', age:44},
]

for (let i=0; i < people.length; i++) {
    console.log(people[i].name);
}






// output
console.log(val);