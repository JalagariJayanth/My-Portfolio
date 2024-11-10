// Navbar.js
import React from 'react';
import './index.css';

const Navbar = () => (
    <nav className="nav-header">
        <div className="nav-content">
            <h1 className="name">Jalagari Jayanth</h1>
            <ul className="navs">
                <a className="text_decoration" href="#projects"><li className='list_item'>My Work</li></a>
                <a className="text_decoration" href="#skills"><li className='list_item'>Skills</li></a>
                <a className="text_decoration" href="#resume"><li className='list_item'>Resume</li></a>
            </ul>
        </div>
    </nav>
);

export default Navbar;
