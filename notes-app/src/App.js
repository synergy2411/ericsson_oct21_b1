import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className="container">
      <Notes />
    </div>

    // React.createElement("div", { className : 'container'}, "From JavaScript : Notes Coming soon...")

    // React.createElement("div", {className: "container"}, 
    //   React.createElement("p", {}, "Notes coming soon..."), 
    //     React.createElement("div", {}, ))

    // <div className="container">
    //   <p>Notes coming soon...</p>
    //   <div>Image container
    //     <img src="xyz.jpg" alt=""/>
    //   </div>
    // </div>

    );
}

export default App;


// JSX -> JavaScript -> VDOM -> Render on UI (Real DOM) -> Model Change -> Update the VDOM -> Re-render UI