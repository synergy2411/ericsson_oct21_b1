// Actions

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

export const STORE_RESULT= "STORE_RESULT";

// Action Creators

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