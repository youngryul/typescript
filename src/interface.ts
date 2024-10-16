interface User {
    firstName: string,
    lastName: string,
    sayHi(name: string):string,
    fullName():string
}

class Player implements User {
    constructor(
        public firstName:string,
        public lastName:string
    ) {}

    fullName() {
        return `${this.firstName}  ${this.lastName}`
    }

    sayHi(name: string){
        return `Hello ${name} My name is ${this.fullName()}`
    }

}