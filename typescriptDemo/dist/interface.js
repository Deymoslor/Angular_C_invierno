"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email } = { name: "John", id: 1, email: "" };
// user.name;
// user.email;
console.log(userName);
let employee = { name: "John", id: 1, email: "", salary: 100 };
let [user1, user2, ...restUsers] = [{
        name: "John", id: 1, email: ""
    },
    {
        name: "John", id: 2, email: ""
    },
    {
        name: "John", id: 3, email: ""
    },
    {
        name: "John", id: 4, email: ""
    }
];
console.log(user1);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
