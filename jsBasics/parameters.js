function writeCode(language = 'JavaScript') {
    console.log('Write code in $(language ');
}

writeCode('JavaScript');
writeCode('C#');
writeCode();

function codeDetails(language = 'JavaScripts', tool = 'VS Code') {
    console.log('Writing code in $(language), using $(tool)');
}

codeDetails();
codeDetails('Python');
codeDetails('Python', 'PyCharm');

//  Getters and Setters
const courses = { 
    name: 'JavaScript',
    duration: '6 weeks',
    get details(){
        return '${this.name} is ${this.duration}';
    },
    set details(value){
        let parts = value.split('is');
        this.name = parts[0];
        this.duration = parts[1];
    }   
};
// console.log('${courses.name} is a $(courses.duration)');
console.log(courses.details());
console.log(courses.details);

courses.details = 'Python is 8 weeks';
console.log(courses.details);