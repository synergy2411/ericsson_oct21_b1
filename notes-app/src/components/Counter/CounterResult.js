import { connect } from "react-redux";
import "./CounterResult.css";
import * as fromActions from "../../store/actions/counterActions";

const CounterResult = (props) => {
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <button
          className="btn btn-warning btn-block btn-sm"
          onClick={() => props.onStoreResult(props.counter)}
        >
          Store Result
        </button>
        <br />
        <ul className="list-group">
          {props.result.map((r, index) => (
            <li
              onDoubleClick={() => props.onDeleteResult(index)}
              key={index}
              className="list-group-item my-list"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.res.result,
    counter : state.ctr.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (counter) => dispatch(fromActions.onStoreResult(counter)),
    onDeleteResult: (index) => dispatch(fromActions.onDeleteResult(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterResult);
