import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const SinglePost = () => {
    const { postID } = useParams()
    console.log(postID)
    const posts = useSelector(state => state.posts)
    console.log(posts)
    const post = posts.find(post => post.id === postID)
    console.log(post)
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6" key={post.id}>
                    <div class="card w-75">
                        <div class="card-body">
                            <h5 class="card-title">{post?.title}</h5>
                            <p class="card-text">{post?.content}</p>
                            <Link to="/editpost"><button class="btn btn-primary">Edit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost