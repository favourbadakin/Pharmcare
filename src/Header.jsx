import React from 'react';
import logo from './images/logo.png';
import phone from './images/phone.png';
import dots from './images/dots_1.png';
import { Squash as Hamburger } from 'hamburger-react'

export default function Header(){
return(
    <header>
        <nav>
            <img className='nav-logo' src={logo} alt='logo' />
            <Hamburger className='hamburger'/>
        </nav>
        <div className='header-text'>
            <h1>Get your prescriptions on the go.</h1>
            <p className='nav-p'>Get the right drugs for the right ailment by writing down the symptoms.
                 Call us right away and get information,
                  while talking to experienced health care experts.</p>
            <a className='btn header-btn' href='/#'>Get started</a>
        </div>
        <div className='nav-desktop'>
        <img src={phone} alt='phone' />
        <img src={dots} alt='dots' />
        <img src={dots} alt='dots' />
        </div>
    </header>
)
}