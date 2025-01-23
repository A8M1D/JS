function SetUsername(username){
    this.username = username
    console.log("Called !");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    
    
    // this.username = username    
    this.email = email
    this.password = password
}

const dea = new createUser("Dea", "dea@fb.com", "123456")
console.log(dea);
