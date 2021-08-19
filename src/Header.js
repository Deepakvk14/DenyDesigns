import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link  } from "react-router-dom";
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className= "left_header">
            <Link to="/">
                <h3>DenyDesigns</h3>
                </Link>
                <Link to="products">
                <p>PRODUCTS</p>
                </Link>
                <p> COLLECTIONS</p>
                <p>OUR STORY</p>
                <Link to="cart">
                <p>ART</p>
                </Link>
                <p></p>
            </div>
            <div className= "right_header">
                <input placeholder="search ur product" > 
                </input><SearchIcon className="icon" />
               
                <AccountBoxIcon className="icon"/>
                
                <Link to ="login">
                Login
                </Link>
            </div>
        </div>
    )
}

export default Header
