import * as fromActions from "../actions/counterActions";

const initialState = {
  counter: 0,
  result :  []
};

function reducerFn(state = initialState, action) {
  switch (action.type) {
    case fromActions.INCREMENT: {
      return {
          ...state,
        counter: state.counter + 1,
      };
    }
    case fromActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case fromActions.ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case fromActions.SUBTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    case fromActions.STORE_RESULT :{
        return {
            ...state,
            result : [state.counter, ...state.result]
        }
    }
    default:
      return state;
  }
}

export default reducerFn;
