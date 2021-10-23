import * as fromActions from "../actions/counterActions";

const initialState = {
  result :  []
};

function resultReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.STORE_RESULT :{
        return {
            ...state,
            result : [action.counter, ...state.result]
        }
    }
    case fromActions.DELETE_RESULT :{
        const duplicateResult = state.result.filter((res, index) => index !== action.index );
        return {
            ...state,
            result : [...duplicateResult]
        }
    }
    default:
      return state;
  }
}

export default resultReducer;
