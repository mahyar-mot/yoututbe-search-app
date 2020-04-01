import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={video.snippet.thumbnails.channelTitle}/>
                </div>
                <div className="media-body">
                    <div className="media-heading" onClick={() => onVideoSelect(video) } >{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem


