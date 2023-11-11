import React from 'react';
import '../styles/index.css'
import logo from '../images/logo.png'

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className='logo-title'>
                <img src={logo} alt="" />
                <h2>ReactFacts</h2>
            </div>
            <div className='onglets'>
                <h3>React Course -Project 1</h3>
            </div>
        </nav>
    )
}

