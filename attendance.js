class Users {
    constructor(name, email, login) {
        this.name = name;
        this.email = email;
        this.login = login;
        this.loginMessage = function() {
            if (this.login === true) {
                return `${name} has succesfully logged in.`
            } else {
                return "Login unsuccessful."
            }
        }
    }
}

const benjamin = new Users("Benjamin", "benjaminefenudu@gmail.com", true);
let emmanuel = new Users("Emmanuel", "emmanuel@gmail.com", false);

console.log(benjamin);
console.log(emmanuel);

console.log(benjamin.loginMessage());
console.log(emmanuel.loginMessage());

