class User {
  constructor(nameArg, surnameArg) {
    this.name = nameArg;
    this.surname = surnameArg;
    this.getEmail();
  }
  getEmail() {
    const email = `${this.name}@${this.surname}.lt`;
    console.log("email ===", email);
  }
}
