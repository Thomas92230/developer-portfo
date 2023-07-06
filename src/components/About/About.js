import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className="about" id="about">
            <div className="about-body">
                <div className='about--container'>
                    <div className="about--left-container">
                        <div className="about-description">
                            <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                            <p>{aboutData.description1}<br/><br/>{aboutData.description2}<br/>{aboutData.description3}<br/>{aboutData.description4}</p>
                        </div>
                    </div>
                    <div className="about--right-container">
                        <div className="about-img">
                            <img 
                                src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                                alt="" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About
