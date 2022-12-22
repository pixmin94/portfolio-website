import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hello from './Hello';

function NavBar() {

    return (
        <>
            <nav>
                <ul className="nav-items">
                <li><Link activeClass="active" className="hello" to="hello" spy={true} smooth={true} duration={500} >Hello</Link></li>
                
                </ul>
            </nav>
            <Hello />
        </>
    );
}

export default NavBar;