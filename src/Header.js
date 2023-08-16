import React from 'react'

import { MdOutlineStorefront } from "react-icons/md";

import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const {cart}=useSelector(state=>state)
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
      <div className="header__logo">
   < MdOutlineStorefront className='header__logoImage' fontSize="large"/>
   <h2 className='header__logoTitle'>eShop</h2>
   </div>
      </Link>
   
   <div className="header__search">
      <input type="text" className='header__searchInput'/>
      <SearchIcon className="header__searchIcon"/>
   </div>
   <div className="header__nav">
    <Link to="/Login" style={{textDecoration:"none"}}><div className="nav__item">
      <span className="nav__itemLineOne">Hello Guest</span>
      <span className="nav__itemLineTwo">Sign In</span>
    </div></Link>
    <div className="nav__item">
    <span className="nav__itemLineOne">Your</span>
      <span className="nav__itemLineTwo">Shop</span>
</div>
<Link to="/checkout" style={{textDecoration:"none"}}>
<div className="nav__itemBasket">
  <ShoppingBasketIcon className='basket'/>
      <span className="nav__itemLineTwo nav__basketCount">{cart.length}</span>
</div>
</Link>
   </div>
    </div>
  )
}

export default Header
