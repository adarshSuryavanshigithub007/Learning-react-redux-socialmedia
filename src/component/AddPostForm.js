import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../redux/features/post/postsSlice'


const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    console.log(users)
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleChangeUser = (event) => {
        setUserId(event.target.value);
    }

    const submitPost = () => {
        dispatch(postAdded(title, content, userId))
        setTitle('')
        setContent('')
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" placeholder="Title" onChange={onTitleChange} value={title} />
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                    <textarea class="form-control" rows="3" placeholder='Content' onChange={onContentChange} value={content}></textarea>
                </div>
                <div class="col-12 col-md-4 col-lg-4">

                    <select class="form-select" aria-label="Default select example" onChange={handleChangeUser} value={userId}>
                        <option selected>Select Author</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
            <div className='row'>
                <div class="col-12 col-md-12 col-lg-12">
                    <button className='btn btn-primary' onClick={submitPost} disabled={title.length === 0 || content.length === 0}>Save</button>
                </div>
            </div>

        </div>
    )
}

export default AddPostForm