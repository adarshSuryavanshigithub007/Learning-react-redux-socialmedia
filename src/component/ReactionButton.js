import React from 'react'
import { useDispatch } from 'react-redux'
import { reactAdded, reactionAdded } from '../redux/features/post/postsSlice'


const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

const ReactionButton = ({ post }) => {
    const disPatch = useDispatch()
      

    console.log(post)
    const reactionButtons = Object.entries(reactionEmoji).map(([label, emoji]) => {
        const reactionCount = post?.reactions?.[label] || 0;
        return (
            <button key={label} type="button" className="muted-button reaction-button" onClick={ ()=>disPatch(reactionAdded({postId:post.id, reaction:label}))}>
                {emoji} {reactionCount}
            </button>
        )
    })
    // console.log(reactionButtons)
    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButton