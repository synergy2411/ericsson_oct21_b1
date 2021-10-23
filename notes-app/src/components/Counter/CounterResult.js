import { connect } from "react-redux";
import *  as fromActions from '../../store/actions/counterActions';

const CounterResult = props => {
    return (
        <div className="row">
            <div className="col-4 offset-4">
                <button className="btn btn-warning btn-block btn-sm" onClick={props.onStoreResult}>Store Result</button>
                <br/>
                <ul className="list-group">
                    {props.result.map((r, index) => <li key={index} className="list-group-item">{r}</li>)}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        result : state.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onStoreResult : () => dispatch({type : fromActions.STORE_RESULT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterResult);