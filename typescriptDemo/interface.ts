export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let { name: userName, email }: User = { name: "John", id: 1, email: "" }
// user.name;
// user.email;
console.log(userName)

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 100 }


export interface Login {
    login(): User;
}


let [user1, user2, ...restUsers]: User[] = [{
    name: "John", id: 1, email: ""
},
{
    name: "John", id: 2, email: ""
}
,
{
    name: "John", id: 3, email: ""
}
,
{
    name: "John", id: 4, email: ""
}
];

console.log(user1)
console.log(restUsers)

let result = restUsers.filter(user => user.id > 3)
