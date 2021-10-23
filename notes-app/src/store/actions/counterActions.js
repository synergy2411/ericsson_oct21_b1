// Actions

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

export const STORE_RESULT= "STORE_RESULT";
export const DELETE_RESULT= "DELETE_RESULT";

// Action Creators

export function onIncrement(){
    return {
        type : INCREMENT
    }
}

export function asyncIncrement(){
    return function(dispatch){
        // We can write all async code here like making XHR Call / timers etc
        // fetch().then(response => response.json()).then(posts => dispatch(posts))
        setTimeout(() =>{
            dispatch(onIncrement())
        }, 1000);
    }
}


export function onStoreResult(counter){
    return {
        type : STORE_RESULT,
        counter
    }
}

export function onDeleteResult(index){
    return {
        type : DELETE_RESULT,
        index
    }
}

export function onAddCounter(value){
    return {
        type : ADD_COUNTER,
        value
    }
}

export function onSubtractCounter(value){
    return {
        type : SUBTRACT_COUNTER,
        value
    }
}