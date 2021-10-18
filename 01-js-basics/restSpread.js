// Spread

// let arr = [3,4,5];

// let newNumbers = [1,2,...arr,6,7];

// console.log(newNumbers);            // [1,2,[3,4,5],6,7]

let user = {
    email : "test@test.com",
    isAdmin : true
}

let newUser = {
    ...user,
    age : 32,
    isAdmin : false
}

// console.log(newUser);           // { age : 32, email : "test@test.com", isAdmin : true}
console.log(newUser);           // ?


const newObj = Object.assign({}, {email:"foo@test.com", age : 36}, {age : 32})

console.log(newObj)






// Rest Operator
// function display(email, ...args){
//     console.log(args[0]);               // ?
// }

// // display("test@test.com")
// // display("test@test.com", 32)
// display("test@test.com", 32, true)