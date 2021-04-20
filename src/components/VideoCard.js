import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../styles/VideoCard.css'

function VideoCard(props) {

    const {image, title, channel, views, timestamp, channelImage} = props

    return (
        <div className='videoCard'>
            <img className='videoCard__thumbnail' src={image} alt='' />
            <div className='videoCard__info'></div>
            <Avatar 
            className='videoCard__avatar' alt={ channel } src={ channelImage }/>
            <div className='videoCard__text'>
                <h4>{ title }</h4>
                <p>{ channel }</p>
                <p>{ views } • { timestamp } </p>
            </div>
        </div>
    )
}

export default VideoCard
