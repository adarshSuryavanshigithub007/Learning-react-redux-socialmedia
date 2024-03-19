import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/features/post/postsSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddPostForm = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const disPatch = useDispatch()


    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value)
    }

    const submitPost = () => {
        disPatch(addPost({
            id:nanoid(),
            title,
            content
        }))
        setTitle('')
        setContent('')
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" placeholder="Title" onChange={onTitleChange} value={title}/>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                    <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                    <textarea class="form-control" rows="3" placeholder='Content' onChange={onContentChange} value={content}></textarea>
                </div>
            </div>
            <div className='row'>
                <div class="col-12 col-md-12 col-lg-12">
                    <button className='btn btn-primary' onClick={submitPost}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddPostForm