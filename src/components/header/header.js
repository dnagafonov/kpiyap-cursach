import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, Link} from "react-router-dom";

import './header.css';

const Header = () => {
    return(
        <Router>
            <header>
                <div className="header-text"><Link to="/">Text</Link></div>
                    <nav className="navigation">
                        <Link to="/services">services</Link>
                        <Link to="/information">info</Link>
                        <Link to="/account">account</Link>
                    </nav>
{/*             <Switch>
                    <Route exact path="/">home</Route>
                    <Route path="/services">services</Route>
                    <Route path="/information">info</Route>
                </Switch>*/}
            </header>
        </Router>
    )
}

export default Header;