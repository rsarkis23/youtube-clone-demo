import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp'
import AppsSharpIcon from '@material-ui/icons/AppsSharp'
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp'
import Avatar from '@material-ui/core/Avatar'
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuSharpIcon />
                <img
                    className='header__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'
                    alt='YouTube Logo'
                />
            </div>
            <div className='header__input' >
                <input placeholder='Search' type='text' />
                <SearchSharpIcon className='header__inputButton' />
            </div>
            <div className='header__right' >
                <VideoCallSharpIcon className='header__icon' />
                <AppsSharpIcon className='header__icon' />
                <NotificationsSharpIcon className='header__icon' />
                <Avatar alt='Profile Picture'/>
            </div>
        </div>
    )
}

export default Header
