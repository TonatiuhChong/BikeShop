import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header(){
    return(
        <nav className="header">
            <img className="header__logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            <Link to="/login" className="header__link">
            <div className="header__option">
                <spam className="header_optionLineOne">Hi, usuario</spam>
                <spam className="header_optionLineTwo">Sign in</spam>
            </div>
            </Link>
            <Link to="/order" className="header__link">
            <div className="header__option">
                <spam className="header_optionLineOne">Returns</spam>
                <spam className="header_optionLineTwo">And Orders</spam>
            </div>
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
                <spam className="header_optionLineOne">You</spam>
                <spam className="header_optionLineTwo">Prime</spam>
            </div>
            </Link>
            <Link to="/checkout" classname="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__basketCount">2</span>
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header