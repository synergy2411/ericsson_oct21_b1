import { Fragment, useEffect, useState } from "react";
import { useParams, Redirect} from "react-router-dom";

const PostDetail = (props) => {
    const params = useParams()
    const [post, setPost] = useState({title : '', body: ''});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(post => setPost(post))
        }, [])

        // if(!localStorage.getItem("token")){
        //     return <Redirect to="/posts"></Redirect>
        // }
    return (
        <Fragment>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-center">{post.title.toUpperCase()}</h6>
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