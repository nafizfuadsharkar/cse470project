import React from 'react';
import { Banner } from './Banner/Banner';
import Offer from './OfferPart/Offer';
import AboutUs from '../About/AboutUs';
import Course from './Course/Course';
import LiveClass from './Course/LiveClasses/LiveClass';
import Choose from './Choose/Choose';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Banner />
            <Offer />
            <AboutUs />
            <Course />
            <LiveClass />
            <Choose />
            <ContactUs />
        </div>
    );
};

export default Home;