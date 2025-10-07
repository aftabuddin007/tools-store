import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;