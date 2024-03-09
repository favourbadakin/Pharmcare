










import React from 'react'; 
import logo from './images/logo2.png';
import facebook from './images/facebook-footer.png';
import twitter from './images/twitter-footer.png';
import youtube from './images/youtube-footer.png';
export default function Footer (){
return(
   

   


   

   
   
   <footer>
        <div>
        <div>
            <img className='footer-logo' src={logo} alt='logo' />
        </div>
        <div>
            <p className='footer-text'>Get the right drugs for the right ailment by writing down the symptoms. 
                Call us right away and get information, 
                while talking to experienced health care experts.</p>
                <span className='my-span'>
                <p>Follow us</p>
                <p><img src={youtube} alt='youtube-icon' className='socials-icon-1' /></p>
                <p><img src={facebook} alt='facebook-icon' className='socials-icon-1' /></p>
                <p><img src={twitter} alt='twitter-icon' className='socials-icon-1' /></p>
                </span>
        </div>
        </div>
        <div className='ml'>
            <h4>Features</h4>
            <p  className='footer-link'><a href='/#'>Health SEO</a></p>
            <p  className='footer-link'><a href='/#'>Medicine Evaluation</a></p>
            <p  className='footer-link'><a href='/#'>Virtual Doc</a></p>
            <p  className='footer-link'><a href='/#'>Appointment Booking</a></p>
        </div>
        <div  className='ml'>
            <h4>Company</h4>
            <p  className='footer-link'><a href='/#'>About</a></p>
            <p  className='footer-link'><a href='/#'>FAQ</a></p>
            <p  className='footer-link'><a href='/#'>Our Team</a></p>
            <p  className='footer-link'><a href='/#'>Contact Us</a></p>
        </div>
        <div className='socials'>
            <span className='socials-icon'><a href ='/#'><img src={youtube} alt='' className='last' /></a></span>
            <span className='socials-icon socials-icon-1'><a href ='/#'><img src={facebook} alt='' className='last' /></a></span>
            <span className='socials-icon socials-icon-1'><a href ='/#'><img src={twitter} alt='' className='last' /></a></span>
            <br />
        </div>
        <div className="mobile-fav yea">
        <span><a className="fav-link" href='https://twitter.com/fav_bdk' rel="noreferrer noopener" target='_blank'>Developed with love by Fave⚡</a></span>
        </div>
    </footer>
)}
