
import React from 'react';

import TryBg from './images/try-bg-3.svg';
import google from './images/google.png';
import apple from './images/apple.svg';
export default function Header (){
return(

    

    

    

    
    

    
    
    <section className='try--section'>
        <div className='try-div'>
            <h5>Be our Success story</h5>
            <h3>Try for free</h3>
            <h6>Health is wealth. Just check in with us today. At no cost enjoy wellness</h6>
            <div className='download'>
                <a href='/#'><img className='advert' src={google} alt='playstore' /></a>
                <a href='/#'><img className='advert right-ad' src={apple} alt='appstore' /></a>
            </div>
        </div>
            <div className='try--image'>
            <img className='try-bg' src={TryBg} alt='background' />
            </div>
    </section>
)}
