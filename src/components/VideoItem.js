import React from 'react'

const VideoItem = ({video, handleVideoSelect}) =>{
    return(
        <div onClick={ () => handleVideoSelect(video)}> 
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div>{video.snippet.tittle}</div>




        </div>
    )
}

export default VideoItem