import React from 'react';
import logo from './images/logo2.png';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

export default function Footer (){
return(
    <footer>
        <div>
            <img className='footer-logo' src={logo} alt='logo' />
        </div>
        <div>
            <p className='footer-text'>Get the right drugs for the right ailment by writing down the symptoms. 
                Call us right away and get information, 
                while talking to experienced health care experts.</p>
        </div>
        <div>
            <h4>Features</h4>
            <p  className='footer-link'><a href='/#'>Health SEO</a></p>
            <p  className='footer-link'><a href='/#'>Medicine Evaluation</a></p>
            <p  className='footer-link'><a href='/#'>Virtual Doc</a></p>
            <p  className='footer-link'><a href='/#'>Appointment Booking</a></p>
        </div>
        <div>
            <h4>Company</h4>
            <p  className='footer-link'><a href='/#'>About</a></p>
            <p  className='footer-link'><a href='/#'>FAQ</a></p>
            <p  className='footer-link'><a href='/#'>Our Team</a></p>
            <p  className='footer-link'><a href='/#'>Contact Us</a></p>
        </div>
        <div className='socials'>
            <AiFillYoutube className='socials-icon'/>
            <GrFacebookOption className='socials-icon socials-icon-1'/>
            <AiOutlineTwitter className='socials-icon socials-icon-1'/>
        </div>

    </footer>
)}