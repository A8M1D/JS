const Dog = {
    name: 'dog',
    breed: 'bulldog',

    bark() {
        console.log('woof')
    }
}

function getDog(name, breed) {
    return {
        name,
        breed,
        bark() {
            console.log('woof')
        }
    }
}