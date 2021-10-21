import { useReducer } from 'react';

const initialState = {
    counter : 0
}
const reducerFn = (state, action) => {
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }
    return state;
}

const ReducerHookDemo = () => {

     const [state, dispatchFn ] = useReducer(reducerFn, initialState)

     const onIncreaseHandler = () => {
         dispatchFn({type : "INCREMENT"})
     }
     const onDecreaseHandler = () => {
         dispatchFn({type : "DECREMENT"})
     }
    return (
        <div>
            <p className="display-4">Counter : {state.counter}</p>
            <button className="btn btn-primary btn-sm" onClick={onIncreaseHandler}>Increase</button>
            <button className="btn btn-warning btn-sm" onClick={onDecreaseHandler}>Increase</button>
        </div>
    )
}

export default ReducerHookDemo;