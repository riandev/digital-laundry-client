import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurCapacity from '../OurCapacity/OurCapacity';
import OurServices from '../OurServices/OurServices';
import Reviews from '../Reviews/Reviews';
import ServiceProcess from '../ServiceProcess/ServiceProcess';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <WhyChooseUs></WhyChooseUs>
            <ServiceProcess></ServiceProcess>
            <OurCapacity></OurCapacity>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;