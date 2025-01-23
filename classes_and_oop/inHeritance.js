class User {
    constructor(username){
        this.username = username
    }

logMe(){
    console.log(`USERNAME is ${this.username}`);
}
}

class Teacher extends User{
    constructor(username, email, password){
        super (username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}


const Dea = new Teacher("Dea", "dea@gmail.com", "123456")

Dea.addCourse()
const DEA = new User("John")

DEA.logMe()

console.log(Dea === Teacher);

console.log(Dea instanceof User);

