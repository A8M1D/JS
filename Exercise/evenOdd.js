function displayEvenNumbers(array){
    for (const number of array) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

function displayOddNumbers(array){
    for (const number of array) {
        if (number % 2 != 0) {
            console.log(number);
        }
    }
}

displayOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);