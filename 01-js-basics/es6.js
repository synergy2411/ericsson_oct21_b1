console.clear();

var numbers = [2,3,4,5];

// Vanilla JavaScript

// var doubleValue = numbers.map(function (value){
//     return value * 2
// })
// console.log(doubleValue);

// Arrow function
// - dont have 'arguments' keyword
// - can't be called with 'new' operator
// - don't have 'this' reference

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var that = this;
//         return function(){
//             return that.firstName + " " + that.lastName
//         }
//     }
// }

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         return () => {
//             return this.firstName + " " + this.lastName
//         }
//     }
// }

// var nestedFunc = user.getFullName();
// console.log(nestedFunc());              // ?
// console.log(user.getFullName());            // ?


// Scope chaining
// var x =102;
// function a(){
//     function b(){
//         console.log(x);             // undefined
//     }
//     b()
// }

// a();


// Lexical scope
// var x = 103;
// function b(){
//     console.log(x);         // 101 | 103
// }

// function a(){
//     var x =101;
//     b()
// }

// a();

// Closures - process of binding the outer scope variables with inner function
// function test(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFunc = test()
// console.log(nestedFunc())           // 5
// console.log(nestedFunc())           // 6
// console.log(test());                // ?



// function buildTicket(transport){
//     var numOfPass = 0;

//     return function(name){
//         return "Hello " + name + "\nYou are going via " + transport + 
//             "\nYour ticket ID #"+ (++numOfPass)
//     }
// }
// var car = buildTicket("Car")
// console.log(car("Foo"))
// console.log(car("Bar"))
// var ship = buildTicket("Ship")
// console.log(ship("Bam"));           // ?


































// const Person = () => {

// }

// var bar = new Person();

// function Person(){

// }

// var foo = new Person()









// function demo(arguments){
//     console.log(arguments);
// }

// demo("test@test.com", 32, true)














// var tripleValue = numbers.map(value => value * 3)
// console.log(tripleValue);

// console.log(numbers.map(value => {
//     console.log(value);
//     return value * 4;
// }))

// console.log(numbers.map((value, index) => {
//     console.log(index);
//     return value * 4;
// }))