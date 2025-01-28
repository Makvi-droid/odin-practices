const user = {
    username: "CodeMaster",
    level: 5,
    greet: function(){
        console.log(`Hello, I am ${this.username} and I am level ${this.level}!`);
    }
};

user.greet();