import * as fromActions from "../actions/counterActions";

const initialState = {
  counter: 0
};

function counterReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

export default counterReducer;
