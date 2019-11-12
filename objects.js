class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, this.name, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("ryu@ninja.com", "Ryu");
var userTwo = new User("Yoshi@marioKorp.com", "Yoshi");
var admin = new Admin("peach@marioKart", "Peach");
var users = [userOne, userTwo, admin];

console.log(users);
