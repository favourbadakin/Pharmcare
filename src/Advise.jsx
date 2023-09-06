import React from 'react'; 
import svg1 from './images/svg1.png';
import svg2 from './images/svg2.svg';
import profile from './images/profile-circle.svg';
import laptop from './images/Bold-Outline_1_.svg';
import money from './images/money.svg';
import rectangle from './images/rectangle.svg';
import wink from './images/wink.svg';
export default function Advise(){
return(

        
    
    <section className='advise--section'>
        <div className='rect-wrap'>
                <img className='rectangle' src={rectangle} alt='rectangle' />
        </div>
        <div className='advise-1'>
        <div>
            <img className='svg1' src={svg1} alt='svg' />
        </div>
        <div className='advise-1-text'>
            <h2><strong>We Give Advise.</strong></h2>
            <ol>
             <div className='advise-profile'>   
            <img className='icon' src={profile} alt='profile-svg' />
            <li><h4>Got a Concern or Question</h4>
            <p>Are you feeling feverish or have a major ailment? Contact us and get expert advise.</p></li>
            </div>
            <div className='advise-profile'>
            <img className='icon' src={laptop} alt='laptop-svg' />
            <li><h4>Have you Surfed the net tirelessly</h4>
            <p>We have answers to your unending questions. The internet is wide, we are precise.</p></li>
            </div>
            <div className='advise-profile'>
            <img className='icon' src={money} alt='money' />
            <li><h4>Does not cost much to call</h4>
            <p>Call us today for medical based advisory.</p></li>
            </div>
            </ol>      
        </div>
        </div>
        <div className='second-advise'>

            <div>
                <div className='wink-div'>
                <img className='wink' src={wink} alt='wink' />
                <div className='wink-div2 pl'>
            
                    
            <h2 className='lil'><strong>Online</strong></h2>
            <h2 className='lil'><strong>Health check</strong></h2>
            </div>
            </div>
            
            <p className='texts pl'>Health is wealth. Check your health status with us online 
                and get an idea of your mental and physical wellbeing. 
                We run a 24/7 Operation with seamless technology at the fore-front. 
                Results are accurate and timely. 
                Schedule your OHC with us today by contacting us.</p>
                <a href='/#' className='btn pl advise-btn'>Contact us</a>
                </div>
                <div className='top-svg'>
            <img className='svg1 svg2' src={svg2} alt='svg' /> 
            </div> 
            
        </div>
    </section>
)}
