// Primitive type

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

// Reference type

// const productColors = ['red', 'blue', 'green', 'yellow'];
// console.log(productColors);
// const indexOfBlue = productColors.indexOf('blue');
// console.log(indexOfBlue);
// const indexOfYellow = productColors.indexOf('yellow');
// console.log(indexOfYellow);

const employees = [
    {
         name: 'John', 
         age: 30 
        },
    { name: 'Jane', 
        age: 25 
    },
    { name: 'Jack', 
        age: 40 
    }
];

const  employee = employees.find(function(e) {
    return e.name === 'Jane'
});