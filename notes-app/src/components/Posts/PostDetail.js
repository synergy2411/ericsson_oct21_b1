import { Fragment, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const PostDetail = (props) => {
    const params = useParams()
    const [post, setPost] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(post => setPost(post))
        }, [])
    return (
        <Fragment>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h6>{post.title}</h6>
                        </div>
                        <div className="card-body">
                            <p className="text-center">
                                {post.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PostDetail;