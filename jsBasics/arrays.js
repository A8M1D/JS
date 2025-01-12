let productColors = ['red', 'blue', 'green'];

console.log(productColors);

console.log(productColors[0]);


const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Adding in array

numbers.push(6);
console.log(numbers);

// Removing from array

numbers.pop();
console.log(numbers);

// Adding in the beginning of array

numbers.unshift(0);
console.log(numbers);

// Removing from the beginning of array

numbers.shift();
console.log(numbers);

// Finding index of element in array

console.log(numbers.indexOf(2));

//  Adding in middle of array

numbers.splice(2, 0, 2.5);
console.log(numbers);

// Removing from middle of array

numbers.splice(2, 1);
console.log(numbers);

// Combining arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

// Adding in the end of array

const slice = combined.slice(2, 4);
console.log(slice);

// Removing from the end of array

const slice2 = combined.slice(2);
console.log(slice2);

// Iterating over array

combined.forEach((number, index) => {
    console.log(index, number);
}
);

// Mapping array

const items = combined.map(number => '<li>' + number + '</li>');
console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// Filtering array

const filtered = combined.filter(number => number > 3);
console.log(filtered);

// Slicing array

const sliced = combined.slice(2, 4);
console.log(sliced);

// spread operator

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray = [...firstArray, ...secondArray];
console.log(combinedArray);

const copy = [...combinedArray];
console.log(copy);

// Joining array

const joined = combinedArray.join(',');
console.log(joined);

// Splitting array

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combinedMessage = parts.join('-');
console.log(combinedMessage);

// Sorting array

const numbersArray = [2, 3, 1];
numbersArray.sort();
console.log(numbersArray);

numbersArray.reverse();
console.log(numbersArray);

const employees = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Jack',
        age: 40
    }
];

const sortedEmployees = employees.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
}
);
console.log(sortedEmployees);

// Testing elements of array

const allPositive = numbersArray.every(value => value >= 0);
console.log(allPositive);

const atLeastOnePositive = numbersArray.some(value => value >= 0);
console.log(atLeastOnePositive);

// Reducing array

const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Exercise 1 - Array from Range

const numbersRange = arrayFromRange(1, 4);
console.log(numbersRange);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

