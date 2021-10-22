import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import { Route }  from 'react-router-dom';

import ClassBasedComp from "./components/CompType/ClassBasedComp";
import CallbackHook from "./components/Demo/CallbackHook";
import EffectHookDemo from "./components/Demo/EffectHookDemo";
import FormDemo from "./components/Demo/FormDemo";
import ReducerHookDemo from "./components/Demo/ReducerHookDemo";
import Header from "./components/Header/Header";

import Notes from "./components/Notes/Notes";
import Posts from "./components/Posts/Posts";

class App extends Component {
  constructor(){
    super();
    this.state = {
      title : "SomeTitle",
      toggleComp : true
    }
    console.clear()
  }
  render() {
    return (
      <div className="container">
        <Header />
        <br/>


          {/* http://localhost:3000/notes */}
        <Route path="/notes">           
          <Notes />
        </Route>
        {/* http://localhost:3000/posts */}
        <Route path="/posts">
          <Posts />
        </Route>
        
        {/* <CallbackHook /> */}

        {/* <ReducerHookDemo /> */}
        {/* {this.state.toggleComp && <EffectHookDemo />} */}
        {/* <FormDemo /> */}
        {/* <button onClick={() => this.setState({toggleComp : !this.state.toggleComp})}>
            Toggle Comp</button> */}
        {/* {this.state.toggleComp && <ClassBasedComp title={this.state.title} />} */}
        {/* <Notes /> */}
      </div>
    );
  }
}

// function App() {
//   const [title, setTitle] = useState("Some Title");
//   const [toggleComp, setToggleComp] = useState(true);
//   return (
//     <div className="container">
//       <button onClick={() => setToggleComp(!toggleComp)}>Toggle Comp</button>
//       {toggleComp && <ClassBasedComp title={title} />}
//       <br />
//       <hr />
//       <Notes />
//     </div>

//     // React.createElement("div", { className : 'container'}, "From JavaScript : Notes Coming soon...")

//     // React.createElement("div", {className: "container"},
//     //   React.createElement("p", {}, "Notes coming soon..."),
//     //     React.createElement("div", {}, ))

//     // <div className="container">
//     //   <p>Notes coming soon...</p>
//     //   <div>Image container
//     //     <img src="xyz.jpg" alt=""/>
//     //   </div>
//     // </div>
//   );
// }

export default App;

// JSX -> JavaScript -> VDOM -> Render on UI (Real DOM) -> Model Change -> Update the VDOM -> Re-render UI
