
// Destructuring - Array, Objects

let users = [
    {email : "test1@test.com", age : 32},
    {email : "test2@test.com", age : 33},
    {email : "test3@test.com", age : 34},
]

let [
    {email : e1 , age : a1},
    {email : e2 , age : a2},
    {email : e3 , age : a3}
] = users;

console.log(e2, a3)

// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     },
//     friends : ["Bam", "Baz"]
// }

// let {
//     firstName, 
//     lastName,
//     address : {
//         city,
//         street
//     },
//     friends : [ f1, f2 ]
// } = user;

// console.log(firstName, city, f1)


// let myModule = {
//     drawText : text => console.log("Drawing text : ", text),
//     drawCircle : r => console.log(Math.PI * r * r),
//     drawRect : (w, l ) => console.log(2 * w * l)
// }

// let { drawRect : dr, drawCircle: dc, drawText : dt } = myModule;

// dt("Sample String");
// drawCircle(3);










// let fruits = ["Apple", "Banana", "Orange", "Kiwi"];

// let [f1, , f3, f4, f5] = fruits;

// console.log(f3);            // Orange

// console.log(f5);            // undefined