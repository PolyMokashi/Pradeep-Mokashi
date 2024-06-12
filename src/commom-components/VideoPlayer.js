import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ src }) => {

    return (
            <ReactPlayer url={src} controls />
    )
}

export default VideoPlayer
