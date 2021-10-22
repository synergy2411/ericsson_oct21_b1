import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import DummyPost from "./components/Posts/DummyPost";
import PostDetail from "./components/Posts/PostDetail";
import Posts from "./components/Posts/Posts";



class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "SomeTitle",
      toggleComp: true,
    };
    console.clear();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <br />

        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact>
            <Redirect to="/posts" ></Redirect>
          </Route>
          {/* http://localhost:3000/notes */}
          <Route path="/notes">
            <Notes />
          </Route>
          {/* http://localhost:3000/posts */}
          <Route path="/posts" exact>
            <Posts />
          </Route>
          {/* http://localhost:3000/posts/123*/}
          <Route path="/posts/:id">
            <PostDetail />
          </Route>
          <Route path="/dummy-post">
            <DummyPost />
          </Route>
        </Switch>

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
