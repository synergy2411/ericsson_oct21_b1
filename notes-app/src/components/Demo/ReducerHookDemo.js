import { useReducer } from 'react';

const initialState = {
    counter : 0,
    result : []
}
const reducerFn = (state, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            counter : state.counter - 1
        }
    }else if(action.type === "STORE_RESULT"){
        return {
            ...state,
            result : [state.counter, ...state.result]
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

     const onStoreResultHandler = () => {
         dispatchFn({type : "STORE_RESULT"})
     }
    return (
        <div>
            <p className="display-4">Counter : {state.counter}</p>
            <button className="btn btn-primary btn-sm" onClick={onIncreaseHandler}>Increase</button>
            <button className="btn btn-warning btn-sm" onClick={onDecreaseHandler}>Increase</button>
            <br/>
            <hr/>

            <button className="btn btn-success btn-sm" onClick={onStoreResultHandler}>Store</button>
            <ul className="list-group">
                {state.result.map((res, index)=><li className="list-group-item" key={index}>{res}</li>)}
            </ul>

        </div>
    )
}

export default ReducerHookDemo;