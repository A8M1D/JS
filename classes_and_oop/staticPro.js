class User {
    constructor(username){ 
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return`123`
    }

}

const Dea = new User("Dea")

// console.log(Dea.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const John = new Teacher("John", "john@gmail.com")
// console.log(John);
console.log(John.createId());