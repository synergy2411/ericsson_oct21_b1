import { connect } from "react-redux";
import * as fromActions from '../../store/actions/counterActions';

const CounterButton = props => {
    return (
        <div className="btn-group">
            {/* <button className={props.myClass}>{props.textContent.toUpperCase()}</button> */}
            <button className="btn btn-primary btn-sm" onClick={props.onIncrease}>Increase</button>
            <button className="btn btn-dark btn-sm" onClick={props.onDecrease}>Decrease</button>
            <button className="btn btn-success btn-sm" onClick={() => props.onAdd(10)}>Add (10)</button>
            <button className="btn btn-info btn-sm" onClick={() => props.onSubtract(5)}>Subtract (5)</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        // onIncrease : () => dispatch({type : fromActions.INCREMENT}),
        onIncrease : () => dispatch(fromActions.asyncIncrement()),
        onDecrease : () => dispatch({type : fromActions.DECREMENT}),
        onAdd: value => dispatch(fromActions.onAddCounter(value)),
        onSubtract : value => dispatch(fromActions.onSubtractCounter(value))
    }
}
export default connect(null, mapDispatchToProps)(CounterButton);