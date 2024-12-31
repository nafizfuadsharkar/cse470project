import React from 'react';
import LiveClass from '../Course/LiveClasses/LiveClass';
import Choose from '../Choose/Choose';
import About from './About';
import AboutUs from '../../About/AboutUs';

const AboutSection = () => {
    window.scrollTo(0,0)
    return (
        <div className=' pt-16 min-h-screen'>
            <AboutUs />
            <LiveClass />
            <Choose />
        </div>
    );
};

export default AboutSection;