import React from 'react';
import './header.css';
import Button from "../buttons/button";

const Header = () => {
    return(
        <header>
            <div className="header-text">Text</div>
            <nav>
                <Button btnStyle="danger">ds</Button>
                <a href="#">dfde</a>
                <a href="#">dfdf</a>
                <a href="#">dsde</a>
            </nav>
        </header>
    )
}

export default Header;