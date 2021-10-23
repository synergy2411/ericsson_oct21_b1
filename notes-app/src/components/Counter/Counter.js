import { Fragment } from 'react';
import { connect } from 'react-redux';
import CounterButton from './CounterButton';
import CounterResult from './CounterResult';

const Counter = (props) => {
    return (
    <Fragment>
        <div className="text-center">
        <p className="display-4">Counter : {props.counter}</p>
        <hr />
        <CounterButton />
        <br/>
        <br/>
        <CounterResult />
        </div>
    </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

const connected = connect(mapStateToProps, mapDispatchToProps);
export default connected(Counter);


// function connect(a,b){
//     return function(Component){
//         return JSX_CODE
//     }
// }