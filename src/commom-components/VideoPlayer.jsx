import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ src }) => {

    return <ReactPlayer url={src} controls width="100%" height="100%" />
}

export default VideoPlayer
