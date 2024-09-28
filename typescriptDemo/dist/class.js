"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
;
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 10;
    }
    //constructor(){}
    constructor(id, name, addres) {
        _Employee_id.set(this, void 0);
        this.addres = addres;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    login() {
        return { name: "John", id: 1, email: "" };
    }
    getNameWithAddres() {
        return `${this.name} ${this.addres}`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", {
    street: "x",
    city: "xx",
    state: "xxx",
    pin: "xxxx"
});
john.empId = 100;
console.log(john.empId);
let count = Employee.getEmployeeCount();
let addres = john.getNameWithAddres();
//john.id
console.log(addres);
class Manager extends Employee {
    constructor(id, name, addres) {
        super(id, name, {
            street: "x",
            city: "xx",
            state: "xxx",
            pin: "xxxx"
        });
    }
    //aqui podriamos omitir este metodo y usar el de la clase padre.
    getNameWithAddres() {
        return `${this.name} is a managaer at ${this.addres}`;
    }
}
let mike = new Manager(2, "Mike", "Bello");
console.log(mike.getNameWithAddres());
