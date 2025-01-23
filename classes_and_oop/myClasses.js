// ES6

// class User {
//     constructor(usrname, email, password){
//         this.usrname = usrname;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.usrname.toUpperCase()}`
//     }

// }

// const dea = new User("Dea", "dea@gmail.com", "123")

// console.log(dea.encryptPassword());
// console.log(dea.changeUsername());


// Behind The Scene

function User(usrname, email, password){
    this.usrname = usrname;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.password}abc`
}

const Dea = new User("dea", "Dea@gmail.com", "123")

console.log(Dea.encryptPassword());
console.log(Dea.changeUsername());


