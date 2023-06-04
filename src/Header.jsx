import React from 'react';
import logo from './images/logo.png';
import phone from './images/frame-1.png';
import google from './images/google.png';
import apple from './images/apple.svg';
import { Squash as Hamburger } from 'hamburger-react'
export default function Header(){
return(
    <header>
    
    
    
        <div className='first-half'>
        <nav>
            <img className='nav-logo' src={logo} alt='logo' />
            <span className='hamburger'><Hamburger /></span>
        </nav>
        <div className='header-text'>
            <h1>Get your prescriptions on the go.</h1>
            <p className='nav-p'>Get the right drugs for the right ailment by writing down the symptoms.
                 Call us right away and get information,
                  while talking to experienced health care experts.</p>
            <a className='btn header-btn' href='/#'>Get started</a>
            <div className='download header-download'>
                <a href='/#'><img className='advert header-advert' src={google} alt='playstore' /></a>
                <a href='/#'><img className='advert right-ad header-right-ad' src={apple} alt='appstore' /></a>
            </div>
            </div>
        </div>
        <div className='nav-desktop'>
        <img src={phone} alt='phone' />
        </div>
    </header>
)


}
