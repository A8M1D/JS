const user = {
    username: "Ahmad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database!");
    }
}

// console.log(user.username);
// console.log(user.getUserDetails);

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Ahmad", 12, true);
const userTwo = new User("Kokni", 13, false);

console.log(userTwo);
