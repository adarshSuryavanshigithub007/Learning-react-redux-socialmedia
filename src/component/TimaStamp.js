import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

const TimaStamp = ({ timeStamp }) => {
    console.log(timeStamp)
    let timeStampAgo = ''
    if (timeStamp) {
        const date = parseISO(timeStamp)
        console.log(date)
        const timePeriod = formatDistanceToNow(date)
        console.log(timePeriod)
        timeStampAgo = `${timePeriod} ago`

    }
    return (
        <div>{timeStampAgo}</div>
    )
}

export default TimaStamp