import { Login, User } from './interface'
//import * as UserLogin from './interface'

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
};


class Employee implements Login {
    #id!: number;
    protected name: string;
    addres: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number){
        this.#id = id
    }

    static getEmployeeCount(): number {
        return 10;
    }
    
    //constructor(){}
    constructor(id: number, name: string, addres: Address){
        this.addres = addres;
        this.name = name;
        this.#id = id;
    }
    login(): User {
        return { name: "John", id: 1, email: ""}
    }

    getNameWithAddres(): string {
        return `${this.name} ${this.addres}`
    }
}

let john = new Employee(1, "John", {
    street: "x",
    city: "xx",
    state: "xxx",
    pin: "xxxx"
});
john.empId = 100;
console.log(john.empId)

let count: number = Employee.getEmployeeCount();

let addres = john.getNameWithAddres();

//john.id

console.log(addres)

class Manager extends Employee {

    constructor(id: number, name: string, addres: string){
        super(id, name, {
            street: "x",
            city: "xx",
            state: "xxx",
            pin: "xxxx"
        });
    }
    //aqui podriamos omitir este metodo y usar el de la clase padre.
    getNameWithAddres(): string {
        return `${this.name} is a managaer at ${this.addres}`
    }
}

let mike = new Manager(2, "Mike", "Bello")
console.log(mike.getNameWithAddres());