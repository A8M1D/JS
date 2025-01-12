// Arithmetic Operators

a=10;
b=20;
c=a+b;
d=a-b;
e=a*b;
f=a/b;
g=a%b;
h=a**b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

let programingLanguage = 'JavaScript';

// Comparison Operators

let num1 = 10;
let num2 = 20;

const isNum1EqualNum2 = num1 === num2;
console.log(isNum1EqualNum2); // false

const isNum1NotEqualNum2 = num1 !== num2;
console.log(isNum1NotEqualNum2); // true

const isNum1GreaterThanNum2 = num1 > num2;
console.log(isNum1GreaterThanNum2); // false

const isNum1LessThanNum2 = num1 < num2;
console.log(isNum1LessThanNum2); // true

const isNum1GreaterThanOrEqualNum2 = num1 >= num2;
console.log(isNum1GreaterThanOrEqualNum2); // false

const isNum1LessThanOrEqualNum2 = num1 <= num2;
console.log(isNum1LessThanOrEqualNum2); // true

// Equality Operators
let a=2;
let b='2';
console.log(a==b); // true
console.log(a===b); // false

// Ternary Operator

let num = 10;
let isNumEven = num % 2 === 0 ? 'Even' : 'Odd';

// Logical Operators
let num3 = 10;
let num4 = 20;

console.log(num3 > 5 && num4 < 15); // false returns true only if both conditions are true
console.log(num3 > 5 || num4 < 15); // true returns true if any one of the conditions is true
console.log(!(num3 > 5)); // false returns the opposite of the condition

