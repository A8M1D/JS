const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


const john = {
    name: 'Ginger Tea',
    price: 250,
    isAvailable: true,


    orderJohn: function(){
        console.log("John is not availabel !");
        
    }

}

console.log(Object.getOwnPropertyDescriptor(john, "name"));


Object.defineProperty(john, 'name',{ 
    // value: john.name,
    // Writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(john,"name"));

for (let [key, value] of Object.entries(john)){

    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }



    
}