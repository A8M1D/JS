const course = {   
    name: 'Learn JavaScript',
    start(){
        console.log(this.name);
    }
}

course.start();

function startVideo(){
    console.log(this);
}

startVideo();

function intro(language){
    console.log(this.name + ' teaches' + language);
}

const instructor = {name: 'John'};
const introduction = introduce.bind(instructor);
introduction('JavaScript');