import { Component } from 'react';


class ClassBasedComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
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

    render(){
        console.log("Render")
        return (
            <div>
                <p className="display-4">Counter : {this.state.counter}</p>
                <p>Title Props from parent : {this.props.title} </p>
                {/* <button onClick={this.onIncarese.bind(this)}>Increase</button> */}
                <button onClick={this.onIncarese}>Increase</button>
            </div>

            )
    }
}

export default ClassBasedComp;