const User = {
    _email: 'd@ea.com',
    _password: 'dea',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


const dea = Object.create(User)
console.log(dea.email);
