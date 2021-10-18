// Default Parameter

function demo(port = 3030){
    console.log("Running on PORT : ", port)
}

demo()



// Map & Set

// Objects stores property name as strings only

// let set = new Set()

// let user1 = { name : "Foo"}
// let user2 = { name : "Bar"}
// let user3 = { name : "Baz"}

// set.add(user1)
// set.add(user2)
// set.add(user3)
// set.add(user2)
// set.add(user1)

// console.log("Set Size : ", set.size);



// let map = new Map();
// let user = {name : "Foo"};

// map.set('1', "One");
// map.set(1, "The One Digit");
// map.set(true, "The Boolean");
// map.set(user, "The Object")

// for(let key of map.keys()){
//     console.log(key);
// }

// for(let value of map.values()){
//     console.log("Value : ", value)
// }

// console.log(map.get('1'))
// console.log(map.get(1))
// console.log(map.get(user))

// console.log(map.has(true))
// console.log(map.size)



// Template Literals
// - Embedded Variable
// - Multiline String

let username = "Foo Bar";
let age = 32;
let str = `Hello from ${username}!
I am ${age} years old!`;

// console.log(str)

// Class Concept
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello () {
        return "Hello from " + this.firstName + " " + this.lastName; 
    }
}

const foo = new Student("Foo", "Bam");
// console.log(foo.sayHello());