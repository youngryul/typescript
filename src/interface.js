"use strict";
class Player {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName}  ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name} My name is ${this.fullName()}`;
    }
}
