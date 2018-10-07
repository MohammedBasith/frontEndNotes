const num1 = 100;
const num2 = 50;



let value;

// simple math with numbers
value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;
// for finding the remainder
value = num1 % num2;


// Math Object
value = Math.PI;
value = Math.E;

value = Math.round(2.4);
value = Math.round(2.6);
value = Math.ceil(2.4);
value = Math.floor(2.9);

value = Math.sqrt(64);
value = Math.abs(-3);

value = Math.pow(8,2);

value = Math.min(3,55,6,-2);
value = Math.max(2,4,57,-3);

value = Math.random();
// random value between 0 and 1

value = Math.random() *20;
// random value between 0 and 20

value = Math.random() *20 + 1;
// random value between 0 and 21

value = Math.floor(Math.random()*20);



// output
console.log(value);