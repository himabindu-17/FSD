"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
let Name = "Himabindu";
console.log("User Name: " + Name);
console.log("Data Type: " + typeof Name);
console.log("Length of string: " + Name.length);
console.log("Uppercase: " + Name.toUpperCase());
function greet(name) {
    console.log(`Hello,${name}!`);
}
greet(Name);
//number
let a = 20;
let b = 15;
console.log("Datatype: " + typeof a);
console.log("Addition: " + (a + b));
console.log("Average: " + (a + b) / 2);
let pi = 3.14;
console.log("Area of circle: " + pi * a * a);
function largest(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log("Largest: " + largest(a, b));
//boolean
let age = 19;
let isEligible = age >= 18;
console.log("Eligible or not? ", isEligible);
function isGreater(a, b) {
    return a > b;
}
console.log(isGreater(2, 5)); //false
console.log(isGreater(7, 5)); //true
//# sourceMappingURL=primitive.js.map