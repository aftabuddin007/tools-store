import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Banner from '../pages/Banner/Banner';
import HeroBanner from '../pages/HeroBanner/HeroBanner';
import Loading from '../pages/Loading/Loading';

const Root = () => {
    const location = useLocation();
  const [loading, setLoading] = useState(false);
// console.log(loading)
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timeout);
  }, [location]);
    return (
        
        <div className=''>
        <Header ></Header>
        
        
        {loading?<Loading></Loading>:<Outlet></Outlet>}
        
        <Footer></Footer>
        </div>
    );
};

export default Root;