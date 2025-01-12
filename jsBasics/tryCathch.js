//  Getters and Setters
const courses = { 
    name: 'JavaScript',
    duration: '6 weeks',
    get details(){
        return '${this.name} is ${this.duration}';
    },
    set details(value){
        if(typeof value !== 'string'){
            throw new Error('Value, ${value} must be a string');
        }

        let parts = value.split('is');
        this.name = parts[0];
        this.duration = parts[1];
    }   
};

try{
    courses.details = 42;
} catch(e){
    console.log('Caught an error: ${e.message}');
}

// console.log('${courses.name} is a $(courses.duration)');
console.log(courses.details());
console.log(courses.details);

courses.details = 'Python is 8 weeks';
console.log(courses.details);

//  Global Scope
const name='Dea';
console.log(name);

// Local Scope
function greet(){
    const name = 'John';
    console.log(name);
}