function multiply(num1,num2){
    return num1*num2;
}

num1 = 2;
num2 = 3;

console.log(multiply(2,3)); // 6

// Declaring a function
function add(num1,num2){
    return num1+num2;
}

console.log(add(2,3)); // 5

// Function Expression
var subtract = function(num1,num2){
    return num1-num2;
}

console.log(subtract(2,3)); // -1

// Hoisting
function divide(num1,num2){
    return num1/num2;
}

console.log(divide(2,3)); // 0.6666666666666666

let add = function(num1,num2){
    console.log(num1+num2);
}

// Arguments
function mul(num1, num2){
    // console.log(arguments);
    // return num1*num2;
    let product =1;
    for (const run of arguments) {
        product *= run;
    }
    return product;
}
console.log(mul(2,3)); // 6

//  The rest operator

let course={
    name: 'Java Script',
    duration: '2 months',
};

let newCourse = { 
    ...course,
    name: 'Python',
};
console.log(newCourse);

function multi(...args){
    return args.reduce((acc,curr) => acc*curr,1);
}
console.log(multi(2,3,4,5)); // 120