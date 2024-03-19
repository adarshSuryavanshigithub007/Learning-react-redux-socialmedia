import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Postlist = () => {
  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <div class="container">
      <div class="row">
        {
          posts.map((post, index) => (
            <div class="col-12 col-md-4 col-lg-4" key={post.id}>
              <div class="card w-75">
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>
                  <p class="card-text">{post.content}</p>
                  <Link to={`posts/${post.id}`}><button  class="btn btn-primary">View</button></Link>  
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Postlist