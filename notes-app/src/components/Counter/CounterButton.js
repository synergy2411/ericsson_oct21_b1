import { connect } from "react-redux";
import * as fromActions from '../../store/actions/counterActions';

const CounterButton = props => {
    return (
        <div className="btn-group">
            {/* <button className={props.myClass}>{props.textContent.toUpperCase()}</button> */}
            <button className="btn btn-primary btn-sm" onClick={props.onIncrease}>Increase</button>
            <button className="btn btn-dark btn-sm" onClick={props.onDecrease}>Decrease</button>
            <button className="btn btn-success btn-sm" onClick={() => props.onAdd(10)}>Add (10)</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrease : () => dispatch({type : fromActions.INCREMENT}),
        onDecrease : () => dispatch({type : fromActions.DECREMENT}),
        onAdd: value => dispatch({type : fromActions.ADD_COUNTER, value})
    }
}
export default connect(null, mapDispatchToProps)(CounterButton);