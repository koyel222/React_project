import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_dark from '../../assets/night.png'
import toggle_icon_light from '../../assets/day.png'

const Navbar = ({theme,setTheme}) => {

    const toggle_mod = () => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    }

  return (
    <div  className='navbar'>

        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={theme == "light" ? search_icon_light : search_icon_dark} alt=''/>
        </div>

        <ul>
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's deals</li>
        </ul>

        <img onClick={() => {toggle_mod()}} 
            src={theme == "light" ? toggle_icon_dark : toggle_icon_light} 
            className='toggle-icon'/>

    </div>
  )
}

export default Navbar;