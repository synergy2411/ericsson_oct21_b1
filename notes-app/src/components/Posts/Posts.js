import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./Posts.css";

const orderPosts = (posts, isAscending) => {
  return posts.sort((a, b) => {
    if (isAscending) {
      return a.title > b.title ? 1 : -1;
    } else {
      return a.title < b.title ? 1 : -1;
    }
  });
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get("order") === "asc";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const filteredPosts = posts.filter((post, index) => index < 5);
        setPosts(filteredPosts);
      });
  }, []);

  const titleClickHandler = (id) => {
    history.push(`${location.pathname}/${id}`);
    // history.push("/dummy-post/"+id)
  };

  const orderChangeHandler = () => {
    history.push(`${location.pathname}?order=${isAscending ? "desc" : "asc"}`);
  };

  const orderedPosts = orderPosts(posts, isAscending);

  return (
    <Fragment>
      <p className="display-4 text-center">My Posts</p>
      <div className="row">
        <div className="col-4 offset-4">
          <button
            className="btn btn-primary btn-sm btn-block"
            onClick={orderChangeHandler}
          >
            Order {isAscending ? "Decending" : "Ascending"}
          </button>
        </div>
      </div>
      <ul className="list-group">
        {orderedPosts.map((post) => (
          <li
            key={post.id}
            onClick={() => titleClickHandler(post.id)}
            className="list-group-item link-class"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Posts;
