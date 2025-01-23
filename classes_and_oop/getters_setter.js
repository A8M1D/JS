class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}dea`
    }

    set password(value){
        this._password = value
    }

}

const Dea = new User("D@ea.ai", "abc")
console.log(Dea.password);
