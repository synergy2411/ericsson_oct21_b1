// Block Scope Variables - 
// - let : other type
// - const : for constants

// function display(arr){
//     // var flash = undefined;
//     // var load = undefined;
//     if(arr.length > 2){
//         let load = "LOADING"
//         console.log(flash);                 // undefined
//     }else{
//         let flash = "FLASHING"
//     }
// }

// display([1,2,3]);     


const username = "Bar";

const user = {
    name : "Foo"
}

// Immutable Change
user.name = "Bar";

// Mutable Change
user = {
    name : "Bam"
}

console.log(user.name);     // "Bar"