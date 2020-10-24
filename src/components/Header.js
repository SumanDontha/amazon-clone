import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <nav className="header">
      {/* Amazon Logo */}
      <Link to="/">
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>
      {/* Search bar */}
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
      {/* Top three links */}
      {/* Basket icon with number */}
      
    </nav>
  )
}

export default Header
