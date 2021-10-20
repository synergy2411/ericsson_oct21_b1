import { Component } from 'react';


class ClassBasedComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            result : []
        }
        console.log("Constructor")
    }

    onIncarese = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    onStoreResult = () => {
        this.setState({
            result : [ this.state.counter, ...this.state.result]
        })
    }
    render(){
        console.log("Render")
        return (
            <div>
                <p className="display-4">Counter : {this.state.counter}</p>
                <p>Title Props from parent : {this.props.title} </p>
                <ul>
                {this.state.result.map((ctr, index) => <li key={index}> {ctr} </li>)}
                </ul>
                {/* <button onClick={this.onIncarese.bind(this)}>Increase</button> */}
                <button onClick={this.onIncarese}>Increase</button>
                <button onClick={this.onStoreResult}>Store Result</button>
            </div>

            )
    }
}

export default ClassBasedComp;