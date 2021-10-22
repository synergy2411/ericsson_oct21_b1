import { Fragment, useEffect, useState } from "react";

const Posts = () => {
    
    const [posts, setPosts]= useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                const filteredPosts = posts.filter((post, index)=> index < 5)
                setPosts(filteredPosts)
            })
    }, [])
    
    return (
        <Fragment>
            <p className="display-4">My Posts</p>
            <ul className="list-group">
                {posts.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
            </ul>
        </Fragment>
    )
}

export default Posts;