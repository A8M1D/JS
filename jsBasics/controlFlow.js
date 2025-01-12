// if-else
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
    } else {  
    console.log("x is less than 5");
    }

// switch-case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
        break;
    }

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
    }

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
    }
while (j < 5);

// for-in loop
let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
    }

// for-of loop
let arr = [1, 2, 3];
for (let val of arr) {
    console.log(val);
    }

// break and continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
    }
    