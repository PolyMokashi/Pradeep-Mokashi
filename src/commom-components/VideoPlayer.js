import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ src }) => {
    const posterUrl = src.replace(/\.[^/.]+$/, '.jpg')

    return (
        <ReactPlayer
            url={src}
            controls
            width="100%"
            height="100%"
            light={posterUrl}
        />
    )
}

export default VideoPlayer
