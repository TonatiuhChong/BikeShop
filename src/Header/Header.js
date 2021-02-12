import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../StateProvider'

function Header(){

    const [{basket},dispatch]= useStateValue();
    return(
        <nav className="header">
            <Link to="/" className="header_link">
            <img className="header__logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            </Link>
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
            
            <Link to="/checkout" classname="header__link">
                <div className="header_option">
                    <ShoppingBasketIcon/>
                    <span className="header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header