// let myName = "Ahmad";

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Ahmad = function(){
    console.log(`Ahmad is present in all objects`);
    
}

Array.prototype.heyAhmad = function(){
    console.log(`Ahmad says hi!`);
    
}

// heroPower.Ahmad();

// myHeros.Ahmad()
// myHeros.heyAhmad()
// heroPower.heyAhmad()


//  inheritance

const User = {
    name: "Dea",
    email: "dea@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "DEA "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Dea".trueLength()
"Him".trueLength()