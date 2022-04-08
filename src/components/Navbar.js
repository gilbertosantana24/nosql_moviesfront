import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
            <h1 className="brand">IMDb</h1>
                <ul className="list">

                    <li className="nav-item0">
                        <Link to="/movieCatalog">MOVIES</Link>
                    </li>

                    <li className="nav-item1">
                        <Link to="/addmovie">SIGN IN</Link>
                    </li>

                    <li className="nav-item2">
                        <Link to="/aboutus">ABOUT US</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar