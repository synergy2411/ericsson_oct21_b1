import React, { useEffect, useState } from "react";

const EffectHookDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showParagraph, setShowParagrah] = useState(true);
  const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //       const notifier = setTimeout(() => {
  //           console.log("UseEffect Works");
  //       }, 500);
  //     return () => {
  //         // Clean up Function
  //         console.log("Clean-up")
  //         clearTimeout(notifier);
  //     }
  //   }, [isLoggedIn, showParagraph]);

  useEffect(()=>{
      if(localStorage.getItem("token") === "Bearer SomeTokenValue"){
        setIsLoggedIn(true)   
      }
  }, [isLoggedIn])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            setPosts(posts)
        })
  }, [])

  const onLoginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "Bearer SomeTokenValue")
  };
  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  };
  return (
    <div>
      {showParagraph && <p>Effect Hook Demo</p>}
      <button onClick={() => setShowParagrah(!showParagraph)}>
        Toggle Paragraph
      </button> <br/>
      {!isLoggedIn && <button className="btn btn-primary" onClick={onLoginHandler}>Login</button>}
      {isLoggedIn && <button className="btn btn-danger" onClick={onLogoutHandler}>Logout</button>}

      <br/>
      <hr/>

    {posts.map(post => <li key={post.id}>{post.title}</li>)}

    </div>
  );
};

export default EffectHookDemo;
