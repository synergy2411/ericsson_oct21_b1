// Producer Code
function demoPromise(arr){
    var promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(arr.length > 2){
                resolve("First Package")                // success case
            }else{
                reject(new Error("Too loo values"))     // failure case
            }
         }, 3000)
    });

    return promise;
}

// Consumer Code 

async function consumePromise(){
    try{
        var package = await demoPromise([1,2])
        console.log(package)
    }catch(err){
        console.log(err)
    }
}

// function consumePromise(){
//     demoPromise([1,2])
//         .then(package => console.log("[RESOLVE]", package))
//         .catch(err => console.log(err))
// }

consumePromise()

// console.log("Start")
// setTimeout(()=>{
//     console.log("Timer");
// }, 0)
// Promise.resolve("Promise").then(data => console.log(data))
// console.log("End")


// Start -> End -> Timer
// Start -> Promsie -> End -> Timer
// Start -> End -> Proimse -> Timer

// Sync - Runs first
// Async - after Sync Code
    // MicroTask - Promise, queueMicroTask()
    // MacroTask - setTimeout, XHR Call, reading/writing etc