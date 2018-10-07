const firstName = 'William';
const lastName = 'Johnson';
const age = 48;

const str = 'Hello there Im a dev';
const tags = 'web-design,developement,programming,sports';

let val;

val = firstName + lastName
val = firstName + ' ' + lastName

val = 'Hello, my name is ' + firstName + '. And Im ' + age + ' years old.'; 


// append - adding onto a variabel without completely replacing it
val = "Zaffer";
val +=' Basith'; 

// escaping
val = 'That\'s awesome, I can\'t wait';
// val = "That's awesome, I can't wait";

// length property - no brackets, so not a method
val = firstName.length;

// concat() method
val = firstName.concat(' ', lastName);

// change cases
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// treating string like read-only arrays
    // finding specific caharacters/values using the index
val = firstName[2];

// indexOf - to find the index of a value/character
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt() - the opposite of indexOf()
val = firstName.charAt('2');
val = firstName.charAt(firstName.length -1);

// substring() - pulling a substring from string
val = firstName.substring(0,4);

// slice() - mostly used with Arrays to pull things out of them, but we can also use with string
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()  - splits a string into an array based on a seperator
val = str.split(' ');
val = tags.split(',');


// output
console.log(val);