import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Banner from '../pages/Banner/Banner';
import HeroBanner from '../pages/HeroBanner/HeroBanner';

const Root = () => {
    return (
        
        <div className=''>
        <Header ></Header>
        
        
        <Outlet></Outlet>
        
        <Footer></Footer>
        </div>
    );
};

export default Root;