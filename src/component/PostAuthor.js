import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({userId}) => {
    console.log(userId)
    const author = useSelector(state => state.users.find(user=>user.id === userId))
    console.log(author)

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor