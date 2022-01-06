import React from 'react'
import route from '../../route';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import sonyliv from '../../img/sonyliv.png'
import './style.css'

const Menu = () => {
    return (
        <div className='menu'>

           <a href='https://www.sonyliv.com/'>
               <img src={sonyliv} alt='sonyliv'/></a>
            <Button style={{maxWidth: '100px', maxHeight: '20px', minWidth: '100px', minHeight: '20px'}} variant="contained">Subscribe</Button>
            <div className='vertical'></div>                       
             <ul className='menu-list'>{route.map(item =><a href={item}><li className='menu-list-items' key={item}>{item}</li></a>)}</ul>
            <div className='menu-end'>
                <div className='search-bar'>

            <SearchIcon fontSize='large' className='menu-end-items'></SearchIcon>
                </div>
                

            <AccountCircleTwoToneIcon fontSize='large' className='menu-end-items'></AccountCircleTwoToneIcon>
            </div>
        </div>
    )
}

export default Menu
