import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

import './header.css';

const Header = () => {
    return(
        <Router>
            <header>
                <div className="header-text">
                    <Link to="/">Autoservice🚘</Link>
                </div>
                <nav className="navigation">
                    <Link to="/services">services</Link>
                    <Link to="/information">info</Link>
                    <Link to="/account">account</Link>
                    <Link to="/menu" className="icon">
                        <span/>
                    </Link>
                </nav>
            </header>
        </Router>
    )
}

export default Header;