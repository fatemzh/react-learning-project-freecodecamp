import React from 'react';
import './styles/index.css';
import logo from './images/logo.png';

export default function Header (){
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Logo" className={styles.logo} />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
