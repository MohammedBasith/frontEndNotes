// Data types in JS

// Primitive Types
    // data is sotred in the location the variable accesses
    // stored on the stack (memory heap)
        // when we access that data, we access it by it's actual value

// Reference Types
    // accessed by reference, not by the actual value
    // objects are stored on the heap, not in teh variable
    // a pointer to alocation in memroy


// Primitive Types
    // Strings - Text (sequences of characters)
    // Numbers - integers, decimals, floats
    // Booleans - true/false
    // Null - intentional empty value
    // undefined - variable that hasn't been assigned a value, yet. All variables are undefined by default
    // Symbols (ES6)

// Reference Types
    // Arrays
    // Objects Lierals
    // Functions
    // Dates
    // Anything else of value that we can store

// JS is Dynamically Typed Language
    // types are associated with the actual values, not vaiables
    // same variable can hold multiple types
    // we don't need to specify types

/* Primitive Types*/

// string
const name = 'Zaffer';

// number
const age = 32;

// booleans
const hasKids = true;
const doesChores = false;

// Null
const car = null;

// undefined
let gotNothingToSay;

// Symbol
const sym = Symbol();


/* Reference Types*/
// Array
const hobbies = ['coding', 'reading', 'sports'];

// Object literals
const address = {
    street: "7531 Foster",
    city: "Chicago",
    state: "IL"
}

const today = new Date();
console.log(today);
console.log(typeof today);

// Output
console.log(typeof name);
console.log(typeof car);
console.log(typeof hobbies);
console.log(typeof address);
